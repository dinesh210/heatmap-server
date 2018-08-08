package com.predina.heatmap;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Null;

@Entity
@Table(name="vehicleinfo")
@Data
public class vehicleinfo {
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    @Column(name="LAT")
    private double lat;
    @Column(name="LNG")
    private double lng;
    @Column(name="LABEL")
    private String label;
    @Column(name="HS")
    private String hs;
}
