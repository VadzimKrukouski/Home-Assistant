package com.example.back.dto.statistic;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class GeneralStatisticDto {
    private LocalDate date;
    private BigDecimal sum;
    private BigDecimal income;
}
