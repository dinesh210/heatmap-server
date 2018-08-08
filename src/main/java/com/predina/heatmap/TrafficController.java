package com.predina.heatmap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/traffic")
public class TrafficController {
    @Autowired
    HeatMapService heatMapService;
    @Autowired
    VehicleService vehicleService;
    @GetMapping("/heatmaps")
    public ResponseEntity<List<HeatMap>> getHeatamaps() {
        return new ResponseEntity<>(heatMapService.getHeatMap(), HttpStatus.OK);
    }

    @GetMapping("/vehicles")
    public ResponseEntity<List<vehicleinfo>> getVehicles() {
        return new ResponseEntity<>(vehicleService.getVehicles(), HttpStatus.OK);
    }




}
