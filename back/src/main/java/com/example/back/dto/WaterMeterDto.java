package com.example.back.dto;

import com.example.back.entity.enums.TypeWater;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@EqualsAndHashCode(callSuper = true)
public class WaterMeterDto extends BaseDto implements Serializable {

    private Long id;

    private TypeWater typeWater;

    private BigDecimal meterReading;
}
