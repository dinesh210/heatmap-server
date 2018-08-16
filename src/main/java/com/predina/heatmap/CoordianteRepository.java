package com.predina.heatmap;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;


@Transactional
public interface CoordianteRepository extends JpaRepository<coordinate, Long> {
}

