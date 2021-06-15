package de.pddao.backend.repository;

import de.pddao.backend.model.PollenItem;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Repository
public class PollenItemRepository {

    private final List<PollenItem> listOfAllPollenItem = new ArrayList<>(List.of(
            new PollenItem("Ambrosia", "ambrosia schießmichtot", "Mai", "Juli"),
            new PollenItem("Erle", "erle schießmichtot", "Februar", "Mai"),
            new PollenItem("Birke", "birke schießmichtot", "Mai", "Juni"))
    );

    public List<PollenItem> listAllPollenItems() {
        return Collections.unmodifiableList(listOfAllPollenItem);
    }
}
