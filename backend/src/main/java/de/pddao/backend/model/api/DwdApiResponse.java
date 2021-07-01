package de.pddao.backend.model.api;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "pollen-count")
public class DwdApiResponse {
    private String last_update;
    private String next_update;
    private String name;
    private String sender;
    private DwdApiLegend legend;
    private DwdApiContent[] content;
}
