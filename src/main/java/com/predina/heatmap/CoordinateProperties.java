package com.predina.heatmap;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

@ConfigurationProperties
public class CoordinateProperties {
    List<Coordiante> coordinates;

    @AllArgsConstructor
    @NoArgsConstructor
    public static class Coordiante {
        double lat;
        double lng;
    }
}
