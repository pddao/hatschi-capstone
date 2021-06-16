package de.pddao.backend.controller;
import de.pddao.backend.model.PollenItem;
import de.pddao.backend.repository.PollenItemRepository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PollenItemControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private PollenItemRepository pollenItemRepository;

    @Test
    @DisplayName("method listAllPollenItems() should return all pollenItems in repository")
    void listAllPollenItemsTest() {

        //GIVEN

        //THEN
        ResponseEntity<PollenItem[]> response = testRestTemplate.getForEntity("http://localhost:" + port + "api/dictionary", PollenItem[].class);

        //WHEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                PollenItem.builder()
                        .englishName("rye") // Roggen
                        .latinName("Secale cereale")
                        .beginSeason("May")
                        .endSeason("June")
                        .distribution("The rye lorem upsum").build(),

                PollenItem.builder()
                        .englishName("ragweed") // Ambrosia (auch Beifuß-Ambrosie)
                        .latinName("Ambrosia artemisiifolia")
                        .beginSeason("August")
                        .endSeason("September")
                        .distribution("Die Ambrosia gehört zu lorem ipsum").build()
        ));
    }
}