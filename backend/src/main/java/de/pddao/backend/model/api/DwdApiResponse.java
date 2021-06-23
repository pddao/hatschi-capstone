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
@Document(collection = "pollen-count") // zweites Repo nötig?
public class DwdApiResponse {

    private String last_update;
    private String next_update;
    private String name;
    private String sender;
    private DwdApiLegend legend;
    private DwdApiContent[] content;
}
