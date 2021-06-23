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
public class DwdApiContent {
    private int region_id;
    private String region_name;
    private int partregion_id;
    private String partregion_name;
    @JsonProperty("Pollen")
    private DwdApiPollen pollen;
}
