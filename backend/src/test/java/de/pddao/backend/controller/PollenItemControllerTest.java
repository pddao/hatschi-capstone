package de.pddao.backend.controller;

import de.pddao.backend.model.BloomingMonth;
import de.pddao.backend.model.PollenItem;
import de.pddao.backend.repository.PollenItemRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.verify;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secret=test_secret")
class PollenItemControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    private PollenItemRepository pollenItemRepository;

    @MockBean
    private RestTemplate mockedTemplate;

    @BeforeEach
    public void clearDb() {
        pollenItemRepository.deleteAll();
    }

    @Test
    @DisplayName("method should return all pollen items in repository")
    void listAllPollenItemsTest() {
        //Given
        pollenItemRepository.save(
                PollenItem.builder()
                        .englishName("test_englishName")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("test_user1", "test_user2"))
                        .build());
        pollenItemRepository.save(
                PollenItem.builder()
                        .englishName("test_englishName2")
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

        //WHEN
        ResponseEntity<PollenItem[]> response = testRestTemplate.getForEntity("http://localhost:" + port + "/api/dictionary", PollenItem[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                PollenItem.builder()
                        .englishName("test_englishName")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("test_user1", "test_user2"))
                        .build(),
                PollenItem.builder()
                        .englishName("test_englishName2")
                        .latinName("test_latinName2")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description2")
                        .firstPicUrl("test_urlFirstPic2")
                        .secondPicUrl("test_urlSecondPic2")
                        .thirdPicUrl("test_urlThirdPic2")
                        .germanName("test_germanName2")
                        .watchedBy(List.of("test_user1"))
                        .build()
        ));
    }
}
