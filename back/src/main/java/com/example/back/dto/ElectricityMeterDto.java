package com.example.back.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Data
@EqualsAndHashCode(callSuper = true)
public class ElectricityMeterDto extends BaseDto implements Serializable {

    private Long id;

    private Integer meterReading;
}
