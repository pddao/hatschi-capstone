package de.pddao.backend.repository;

import de.pddao.backend.model.BloomingMonth;
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
                    .beginBloomingSeason(BloomingMonth.MARCH)
                    .endBloomingSeason(BloomingMonth.MAY)
                    .distribution("In Mitteleuropa weit verbreitet, vom Flachland bis zu 1400 m Höhe in den Alpen, bevorzugt feuchte Standorte").build(),

            PollenItem.builder()
                    .englishName("birch") // Birke
                    .latinName("Betula pendula")
                    .beginBloomingSeason(BloomingMonth.MARCH)
                    .endBloomingSeason(BloomingMonth.MAY)
                    .distribution("Weit verbreiteter Laubbaum, auch gerne als Park- und Alleebaum in Städten verwendet").build(),

            PollenItem.builder()
                    .englishName("rye") // Roggen
                    .latinName("Secale cereale")
                    .beginBloomingSeason(BloomingMonth.MAY)
                    .endBloomingSeason(BloomingMonth.JUNE)
                    .distribution("The rye lorem upsum").build(),

            PollenItem.builder()
                    .englishName("earl") // Schwarz-Erle
                    .latinName("Alnus glutinosa")
                    .beginBloomingSeason(BloomingMonth.FEBRUARY)
                    .endBloomingSeason(BloomingMonth.APRIL)
                    .distribution("Die Erle gehört zu lorem ipsum").build(),

            PollenItem.builder()
                    .englishName("hazel") // Hasel
                    .latinName("Corylus avellana")
                    .beginBloomingSeason(BloomingMonth.JANUARY)
                    .endBloomingSeason(BloomingMonth.APRIL)
                    .distribution("In Mitteleuropa häufig vorkommender Strauch vom Norddeutschen Tiefland bis zu 1400 m Höhe in den Alpen, in Laubwäldern, an Waldrändern oder als Hecken.").build(),

            PollenItem.builder()
                    .englishName("ragweed") // Ambrosia (auch Beifuß-Ambrosie)
                    .latinName("Ambrosia artemisiifolia")
                    .beginBloomingSeason(BloomingMonth.AUGUST)
                    .endBloomingSeason(BloomingMonth.SEPTEMBER)
                    .distribution("Die Ambrosia gehört zu lorem ipsum").build(),

            PollenItem.builder()
                    .englishName("mugwort") // Gemeiner Beifuß
                    .latinName("Artemisia vulgaris")
                    .beginBloomingSeason(BloomingMonth.JULY)
                    .endBloomingSeason(BloomingMonth.SEPTEMBER)
                    .distribution("Der Beifuß gehört zu lorem ipsum").build(),

            PollenItem.builder()
                    .englishName("grasses") // Wildwachsende Süßgräser
                    .latinName("Poaceae")
                    .beginBloomingSeason(BloomingMonth.APRIL)
                    .endBloomingSeason(BloomingMonth.OCTOBER)
                    .distribution("Die Gräser gehören zu lorem ipsum").build()
    ));

    public List<PollenItem> findAll() {
        return Collections.unmodifiableList(pollenItems);
    }
}
