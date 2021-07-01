package de.pddao.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "cities")
public class City {
    @Id
    private String name;
    private int region_id;
    private String region_name;
    private int partregion_id;
    private String partregion_name;
}
