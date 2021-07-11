package de.pddao.backend.controller;

import de.pddao.backend.model.City;
import de.pddao.backend.repository.CityRepository;
import de.pddao.backend.security.model.AppUser;
import de.pddao.backend.security.model.dto.LoginDataDto;
import de.pddao.backend.security.repository.AppUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secret=test_secret")
class CityControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    public void clearDb() {
        cityRepository.deleteAll();
    }

    @Test
    @DisplayName("method should return all cities in repository")
    void listAllCities() {
        //GIVEN
        cityRepository.save(City.builder()
                .name("test_name")
                .region_id(2)
                .region_name("test_region_name")
                .partregion_id(22)
                .partregion_name("test_partregion_name")
                .response_position(6)
                .build());
        cityRepository.save(City.builder()
                .name("test_name2")
                .region_id(4)
                .region_name("test_region_name2")
                .partregion_id(41)
                .partregion_name("test_partregion_name2")
                .response_position(2)
                .build());

        //WHEN
        HttpHeaders headers = getHttpHeaderWithAuthToken();
        ResponseEntity<City[]> response = testRestTemplate.exchange("http://localhost:" +
                        port + "/api/cities",
                HttpMethod.GET,
                new HttpEntity<>(headers),
                City[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                City.builder()
                        .name("test_name")
                        .region_id(2)
                        .region_name("test_region_name")
                        .partregion_id(22)
                        .partregion_name("test_partregion_name")
                        .response_position(6)
                        .build(),
                City.builder()
                        .name("test_name2")
                        .region_id(4)
                        .region_name("test_region_name2")
                        .partregion_id(41)
                        .partregion_name("test_partregion_name2")
                        .response_position(2)
                        .build()));
    }

    @Test
    @DisplayName("method should return city with name Hamburg")
    void testGetCityByName() {
        //GIVEN
        cityRepository.save(City.builder()
                .name("Hamburg")
                .region_id(2)
                .region_name("test_region_name")
                .partregion_id(22)
                .partregion_name("test_partregion_name")
                .response_position(6)
                .build());
        cityRepository.save(City.builder()
                .name("Kiel")
                .region_id(4)
                .region_name("test_region_name2")
                .partregion_id(41)
                .partregion_name("test_partregion_name2")
                .response_position(2)
                .build());

        //WHEN
        HttpHeaders headers = getHttpHeaderWithAuthToken();
        ResponseEntity<City> response = testRestTemplate.exchange("http://localhost:" +
                        port + "/api/cities/Hamburg",
                HttpMethod.GET,
                new HttpEntity<>(headers),
                City.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(City.builder()
                        .name("Hamburg")
                        .region_id(2)
                        .region_name("test_region_name")
                        .partregion_id(22)
                        .partregion_name("test_partregion_name")
                        .response_position(6)
                        .build()));
    }

    private HttpHeaders getHttpHeaderWithAuthToken() {
        appUserRepository.save(AppUser.builder().username("Alex").password(passwordEncoder.encode("test_password")).build());
        LoginDataDto loginData = new LoginDataDto("Alex", "test_password");
        ResponseEntity<String> tokenResponse = testRestTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginData, String.class);
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(tokenResponse.getBody());
        return headers;
    }
}