package com.example.back.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
@EqualsAndHashCode(callSuper = true)
public class WaterHeatingMeterDto extends BaseDto implements Serializable {

    private Long id;

    private BigDecimal meterReading;
}
