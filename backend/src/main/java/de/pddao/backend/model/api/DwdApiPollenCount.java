package de.pddao.backend.model.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection="pollen-count")
public class DwdApiPollenCount {

    private String pollenName;
    private String partregionId;
    private String timestamp;
    private String pollenCount;
}
