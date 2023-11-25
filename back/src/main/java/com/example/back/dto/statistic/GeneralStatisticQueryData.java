package com.example.back.dto.statistic;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface GeneralStatisticQueryData {
    LocalDate getMonth();

    BigDecimal getSum();
}
