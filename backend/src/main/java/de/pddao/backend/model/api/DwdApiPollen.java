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
    private DwdPollenType birke;
    @JsonProperty("Roggen")
    private DwdPollenType roggen;
    @JsonProperty("Erle")
    private DwdPollenType erle;
    @JsonProperty("Esche")
    private DwdPollenType esche;
    @JsonProperty("Hasel")
    private DwdPollenType hasel;
    @JsonProperty("Beifuss")
    private DwdPollenType beifuss;
    @JsonProperty("Graeser")
    private DwdPollenType graeser;
    @JsonProperty("Ambrosia")
    private DwdPollenType ambrosia;
}
