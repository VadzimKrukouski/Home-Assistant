package com.example.back.entity;

import com.example.back.entity.enums.TypeWater;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.math.BigDecimal;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "WATER_METER")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class WaterMeter extends BaseEntity implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TYPE_WATER")
    @Enumerated(value = EnumType.STRING)
    private TypeWater typeWater;

    @Column(name = "METER_READING", nullable = false)
    private BigDecimal meterReading;


}
