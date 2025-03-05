package com.example.back.service.statistic.impl;

import com.example.back.dto.statistic.GeneralStatisticDto;
import com.example.back.dto.statistic.GeneralStatisticQueryData;
import com.example.back.dto.statistic.MonthStatisticDto;
import com.example.back.repository.BillsRepository;
import com.example.back.service.statistic.StatisticService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class StatisticServiceImpl implements StatisticService {

    private final BillsRepository billsRepository;

    @Override
    public List<GeneralStatisticDto> getGeneralStatisticByMonth() {
        List<GeneralStatisticDto> generalStatisticDtos = new ArrayList<>();
        List<GeneralStatisticQueryData> statisticByMonth = billsRepository.getGeneralStatisticByMonth();
        statisticByMonth.forEach(g -> {
            GeneralStatisticDto dto = new GeneralStatisticDto();
            log.info("DAte " + g.getMonth());
            dto.setDate(g.getMonth());
            dto.setSum(g.getSum());
            generalStatisticDtos.add(dto);
        });
        return generalStatisticDtos;
    }

    @Override
    public List<MonthStatisticDto> getMonthlyStatisticByType(String type) {
        log.info("Get monthly statistic by type {}", type);
        List<MonthStatisticDto> monthStatisticDtos = new ArrayList<>();
        billsRepository.getStatisticByMonthAndType(type).forEach(s -> {
            MonthStatisticDto dto = new MonthStatisticDto();
            dto.setDate(s.getMonth());
            dto.setSum(s.getSum());
            monthStatisticDtos.add(dto);
        });
        return monthStatisticDtos;
    }
}
