package de.pddao.backend.repository;

import de.pddao.backend.model.PollenItem;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PollenRepository {

    private final List<PollenItem> listOfAllPollenItem = new ArrayList<>();

    public List<PollenItem> listAllPollenItems () {
        return Collections.unmodifiableList(listOfAllPollenItem);
    }
}
