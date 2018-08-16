package com.predina.heatmap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
//@ConfigurationProperties(prefix = "heatmaps")
public class HeatMapService {
    @Autowired
    CoordianteRepository coordianteRepository;
    private  List<HeatMap> heatmap = new ArrayList<>();
    public HeatMapService(@Autowired
                                  CoordianteRepository coordianteRepository) {
        this.coordianteRepository = coordianteRepository;
        this.coordianteRepository.findAll().forEach(e -> {
            HeatMap heatMap = new HeatMap();
            heatMap.setHeat("green");
            heatMap.setLat(e.getLat());
            heatMap.setLng(e.getLng());
            heatmap.add(heatMap);
        });
    }

    public static String getHeatRandom() {
        String heat = "red";
        double x = (Math.random()*((9-0)+1))+1;
        if(x <= 6 && x>=4) {
            heat = "blue";
        } else if(x<4) {
            heat = "green";
        }
        return heat;
    }

    @Scheduled(cron = "*/10 * * * * *")
    public void updateHeats() {
        heatmap.forEach(e -> {
            e.setHeat(getHeatRandom());
        });
    }

    public List<HeatMap> getHeatMap()  {
        return heatmap;
    }
}
