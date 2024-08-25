package com.example.back.service.statistic;

import com.example.back.dto.statistic.GeneralStatisticDto;
import com.example.back.dto.statistic.MonthStatisticDto;

import java.util.List;

public interface StatisticService {
    List<GeneralStatisticDto> getGeneralStatisticByMonth();

    List<MonthStatisticDto> getMonthlyStatisticByType(String type);
}
