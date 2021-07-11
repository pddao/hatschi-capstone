package de.pddao.backend.controller;

import de.pddao.backend.model.BloomingMonth;
import de.pddao.backend.model.PollenItem;
import de.pddao.backend.model.dto.WatchedPollenItemDto;
import de.pddao.backend.repository.PollenItemRepository;
import de.pddao.backend.security.model.AppUser;
import de.pddao.backend.security.model.dto.LoginDataDto;
import de.pddao.backend.security.repository.AppUserRepository;
import org.hamcrest.MatcherAssert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secret=test_secret")
class WatchedPollenItemControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    private PollenItemRepository pollenItemRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    public void clearDb() {
        pollenItemRepository.deleteAll();
    }

    @Test
    @DisplayName("method should return all watched pollen items")
    void testListAllWatchedPollenItems() {
        //Given
        pollenItemRepository.save(PollenItem.builder()
                .englishName("test_hazel")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .build());
        pollenItemRepository.save(PollenItem.builder()
                .englishName("test_ragweed")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .build());

        //When
        HttpHeaders headers = getHttpHeaderWithAuthToken();
        ResponseEntity<PollenItem[]> response = testRestTemplate.exchange("http://localhost:" + port + "/api/pollenitems/watched",
                HttpMethod.GET,
                new HttpEntity<>(headers),
                PollenItem[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                PollenItem.builder()
                        .englishName("test_hazel")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .build(),
                PollenItem.builder()
                        .englishName("test_ragweed")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .build()
        ));
    }

    @Test
    @DisplayName("method should return pollen items watched by Alex")
    void testListWatchedPollenItemsWatchedByAlex() {
        //Given
        pollenItemRepository.save(PollenItem.builder()
                .englishName("test_hazel")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .watchedBy(List.of("Alex", "Frank"))
                .build());
        pollenItemRepository.save(PollenItem.builder()
                .englishName("test_ragweed")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .watchedBy(List.of("Alex", "Anna"))
                .build());
        pollenItemRepository.save(PollenItem.builder()
                .englishName("test_grasses")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .watchedBy(List.of("Frank"))
                .build());

        //When
        HttpHeaders headers = getHttpHeaderWithAuthToken();
        ResponseEntity<PollenItem[]> response = testRestTemplate.exchange("http://localhost:" + port + "/api/pollenitems/watched?watchedBy=Alex",
                HttpMethod.GET,
                new HttpEntity<>(headers),
                PollenItem[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                PollenItem.builder()
                        .englishName("test_hazel")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("Alex", "Frank"))
                        .build(),
                PollenItem.builder()
                        .englishName("test_ragweed")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("Alex", "Anna"))
                        .build()
        ));
    }

    @Test
    @DisplayName("method should update pollen item hazel on watchlist")
    void testUpdatePollenItemOnWatchlist() {
        // Given
        pollenItemRepository.save(
                PollenItem.builder()
                        .englishName("hazel")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("Alex", "test_user1", "test_user2"))
                        .build());
        pollenItemRepository.save(
                PollenItem.builder()
                        .englishName("rye")
                        .latinName("test_latinName2")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description2")
                        .firstPicUrl("test_urlFirstPic2")
                        .secondPicUrl("test_urlSecondPic2")
                        .thirdPicUrl("test_urlThirdPic2")
                        .germanName("test_germanName2")
                        .watchedBy(List.of("test_user1"))
                        .build());

        WatchedPollenItemDto pollenItemToUpdate = new WatchedPollenItemDto("hazel", true);

        // When
        HttpHeaders headers = getHttpHeaderWithAuthToken();
        ResponseEntity<PollenItem> response = testRestTemplate.exchange("http://localhost:" + port + "/api/pollenitems/watched",
                HttpMethod.PUT,
                new HttpEntity<>(pollenItemToUpdate, headers),
                PollenItem.class);

        // Then
        PollenItem expectedPollenItem = PollenItem.builder()
                .englishName("hazel")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .watchedBy(List.of("Alex","test_user1", "test_user2"))
                .build();
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(expectedPollenItem));
        assertThat(pollenItemRepository.findAll(), hasItem(expectedPollenItem));
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