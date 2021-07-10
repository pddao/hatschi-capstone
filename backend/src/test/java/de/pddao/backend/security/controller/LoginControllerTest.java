package de.pddao.backend.security.controller;

import de.pddao.backend.security.model.AppUser;
import de.pddao.backend.security.model.dto.LoginDataDto;
import de.pddao.backend.security.repository.AppUserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secret=test-jwt-secret")
class LoginControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    public AppUserRepository appUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void LoginWithValidCredentialsShouldReturnValidJwtToken() {
        //Given
        appUserRepository.save(AppUser.builder()
                .username("test_username")
                .password(passwordEncoder.encode("test_password"))
                .build());

        //When
        LoginDataDto loginDataDto = new LoginDataDto("test_username", "test_password");
        ResponseEntity<String> response = testRestTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginDataDto, String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        Claims body = Jwts.parser().setSigningKey("test-jwt-secret").parseClaimsJws(response.getBody()).getBody();
        assertThat(body.getSubject(), is("test_username"));
    }

    @Test
    public void LoginWithInvalidCredentialsShouldReturnNoJwtToken() {
        //Given
        appUserRepository.save(AppUser.builder()
                .username("test_username")
                .password(passwordEncoder.encode("test_password!"))
                .build());

        //When
        LoginDataDto loginDataDto = new LoginDataDto("test_username", "test_wrong_password");
        ResponseEntity<String> response = testRestTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginDataDto, String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.FORBIDDEN));
    }

}