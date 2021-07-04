package de.pddao.backend.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DwdApiPollen {
    @JsonProperty("Birke")
    private DwdApiPollenType birch;
    @JsonProperty("Roggen")
    private DwdApiPollenType rye;
    @JsonProperty("Erle")
    private DwdApiPollenType alder;
    @JsonProperty("Esche")
    private DwdApiPollenType ash;
    @JsonProperty("Hasel")
    private DwdApiPollenType hazel;
    @JsonProperty("Beifuss")
    private DwdApiPollenType mugwort;
    @JsonProperty("Graeser")
    private DwdApiPollenType grasses;
    @JsonProperty("Ambrosia")
    private DwdApiPollenType ragweed;
}
