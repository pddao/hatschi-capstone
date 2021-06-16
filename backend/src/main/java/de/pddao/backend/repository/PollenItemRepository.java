package de.pddao.backend.repository;

import de.pddao.backend.model.PollenItem;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Repository
public class PollenItemRepository {

    private final List<PollenItem> pollenItems = new ArrayList<>(List.of(
            PollenItem.builder()
                    .englishName("ash") // Esche
                    .latinName("Fraxinus excelsior")
                    .beginSeason("March")
                    .endSeason("May")
                    .distribution("In Mitteleuropa weit verbreitet, vom Flachland bis zu 1400 m Höhe in den Alpen, bevorzugt feuchte Standorte").build(),

            PollenItem.builder()
                    .englishName("birch") // Birke
                    .latinName("Betula pendula")
                    .beginSeason("March")
                    .endSeason("May")
                    .distribution("Weit verbreiteter Laubbaum, auch gerne als Park- und Alleebaum in Städten verwendet").build(),

            PollenItem.builder()
                    .englishName("rye") // Roggen
                    .latinName("Secale cereale")
                    .beginSeason("May")
                    .endSeason("June")
                    .distribution("The rye lorem upsum").build(),

            PollenItem.builder()
                    .englishName("earl") // Schwarz-Erle
                    .latinName("Alnus glutinosa")
                    .beginSeason("February")
                    .endSeason("April")
                    .distribution("Die Erle gehört zu lorem ipsum").build(),

            PollenItem.builder()
                    .englishName("hazel") // Hasel
                    .latinName("Corylus avellana")
                    .beginSeason("January")
                    .endSeason("April")
                    .distribution("In Mitteleuropa häufig vorkommender Strauch vom Norddeutschen Tiefland bis zu 1400 m Höhe in den Alpen, in Laubwäldern, an Waldrändern oder als Hecken.").build(),

            PollenItem.builder()
                    .englishName("ragweed") // Ambrosia (auch Beifuß-Ambrosie)
                    .latinName("Ambrosia artemisiifolia")
                    .beginSeason("August")
                    .endSeason("September")
                    .distribution("Die Ambrosia gehört zu lorem ipsum").build(),

            PollenItem.builder()
                    .englishName("mugwort") // Gemeiner Beifuß
                    .latinName("Artemisia vulgaris")
                    .beginSeason("July")
                    .endSeason("September")
                    .distribution("Der Beifuß gehört zu lorem ipsum").build(),

            PollenItem.builder()
                    .englishName("grasses") // Wildwachsende Süßgräser
                    .latinName("Poaceae")
                    .beginSeason("April")
                    .endSeason("October")
                    .distribution("Die Gräser gehören zu lorem ipsum").build()
    ));

    public List<PollenItem> findAll() {
        return Collections.unmodifiableList(pollenItems);
    }
}
