package com.predina.heatmap;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional
public interface VehicleInofRepository extends JpaRepository<vehicleinfo, Long> {
    List<vehicleinfo> findByHs(String hs);
}