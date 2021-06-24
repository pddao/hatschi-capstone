package de.pddao.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "cities")
public class City {
    private String name;
    private int region_id;
    private String region_name;
    private int partregion_id;
    private String partregion_name;
}
