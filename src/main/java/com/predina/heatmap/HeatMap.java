package com.predina.heatmap;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class HeatMap {

    private double lat;
    private double lng;
    private String heat;
}
