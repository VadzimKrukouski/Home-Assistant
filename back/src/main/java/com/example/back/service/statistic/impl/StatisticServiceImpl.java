package com.example.back.service.statistic.impl;

import com.example.back.dto.statistic.GeneralStatisticDto;
import com.example.back.dto.statistic.GeneralStatisticQueryData;
import com.example.back.repository.BillsRepository;
import com.example.back.service.statistic.StatisticService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StatisticServiceImpl implements StatisticService {

    private final BillsRepository billsRepository;

    @Override
    public List<GeneralStatisticDto> getGeneralStatisticByMonth() {
        List<GeneralStatisticDto> generalStatisticDtos = new ArrayList<>();
        List<GeneralStatisticQueryData> statisticByMonth = billsRepository.getGeneralStatisticByMonth();
        statisticByMonth.forEach(g -> {
            GeneralStatisticDto dto = new GeneralStatisticDto();
            dto.setDate(g.getMonth());
            dto.setSum(g.getSum());
            generalStatisticDtos.add(dto);
        });
        return generalStatisticDtos;
    }
}
