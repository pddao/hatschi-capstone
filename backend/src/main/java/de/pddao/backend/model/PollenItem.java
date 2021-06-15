package de.pddao.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PollenItem {
    private String name;
    private String latinName;
    private String beginSeason;
    private String endSeason;
}
