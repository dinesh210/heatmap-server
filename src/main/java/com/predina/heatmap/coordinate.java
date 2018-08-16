package com.predina.heatmap;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="COORDINATE")
@Data
public class coordinate {
    @javax.persistence.Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    @Column(name="LAT")
    private double lat;
    @Column(name="LNG")
    private double lng;

}
