package com.example.back.service.statistic;

import com.example.back.dto.statistic.GeneralStatisticDto;

import java.util.List;

public interface StatisticService {
    List<GeneralStatisticDto> getGeneralStatisticByMonth();
}
