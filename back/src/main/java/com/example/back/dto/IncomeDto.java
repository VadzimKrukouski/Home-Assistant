package com.example.back.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class IncomeDto extends BaseDto {
    private Long id;

    private Double income;
}
