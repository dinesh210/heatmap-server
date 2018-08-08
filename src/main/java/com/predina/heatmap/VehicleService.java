package com.predina.heatmap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Service
public class VehicleService {
    @Autowired
    VehicleInofRepository vehicleInofRepository;
    public List<vehicleinfo> vehicles = new ArrayList<>();
    public VehicleService(VehicleInofRepository vehicleInofRepository) {
        this.vehicleInofRepository = vehicleInofRepository;
        this.updateVehicles();
    }
    @Scheduled(cron = "*/59 * * * * *")
    public void updateVehicles() {
        Calendar calendar = Calendar.getInstance();
        StringBuilder query = new StringBuilder();
        int hour = calendar.get(Calendar.HOUR_OF_DAY);
        int minute = calendar.get(Calendar.MINUTE);
        if( hour <5 || hour>15) {
            hour = 6;
        }

        String hourStg = hour<10? "0"+hour :  hour+"" ;
        String minStg = minute<10? "0"+minute :  minute+"" ;
        query.append(hourStg);
        query.append(":");
        query.append(minStg);
        System.out.println("yudinesh" + query.toString());
        vehicles = vehicleInofRepository.findByHs(query.toString());
    }

    public List<vehicleinfo> getVehicles()  {
        return vehicles;
    }
}
