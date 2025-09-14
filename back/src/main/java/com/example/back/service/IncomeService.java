package com.example.back.service;

import com.example.back.dto.IncomeDto;

import java.util.List;

public interface IncomeService extends BaseService<IncomeDto, Long> {

    List<IncomeDto> getIncomeForCurrentMonth();

}
