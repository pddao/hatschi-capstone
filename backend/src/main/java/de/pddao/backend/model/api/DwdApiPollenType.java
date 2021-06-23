package de.pddao.backend.model.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DwdApiPollenType {
    private String today;
    private String tomorrow;
    private String dayafter_to;
}
