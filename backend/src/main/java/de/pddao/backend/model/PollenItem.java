package de.pddao.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "pollen-items")
public class PollenItem {
    @Id
    private String id;
    private String englishName;
    private String latinName;
    private BloomingMonth beginBloomingSeason;
    private BloomingMonth endBloomingSeason;
    private String description;
    private String firstPicUrl;
    private String secondPicUrl;
    private String thirdPicUrl;
}
