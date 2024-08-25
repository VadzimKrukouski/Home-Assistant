package com.example.back.dto.statistic;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class MonthStatisticDto {
    private LocalDate date;
    private BigDecimal sum;
}
