package de.pddao.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

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
    private String germanName;
    private List<String> watchedBy;
}
