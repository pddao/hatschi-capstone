package de.pddao.backend.model.api;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DwdApiPollenType {
    private String today;
    private String tomorrow;
    private String dayafter_to;
}
