package de.pddao.backend.model.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DwdApiLegend {
    private String id1;
    private String id2;
    private String id3;
    private String id4;
    private String id5;
    private String id6;
    private String id7;

    private String id1_desc;
    private String id2_desc;
    private String id3_desc;
    private String id4_desc;
    private String id5_desc;
    private String id6_desc;
    private String id7_desc;
}
