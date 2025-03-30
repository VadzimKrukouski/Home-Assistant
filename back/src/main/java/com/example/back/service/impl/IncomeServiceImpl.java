package com.example.back.service.impl;

import com.example.back.dto.IncomeDto;
import com.example.back.entity.Income;
import com.example.back.mapper.IncomeMapper;
import com.example.back.repository.IncomeRepository;
import com.example.back.service.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IncomeServiceImpl extends BaseServiceImpl<Income, IncomeDto, Long> implements IncomeService {

    @Autowired
    public IncomeServiceImpl(IncomeRepository incomeRepository, IncomeMapper incomeMapper) {
        super(incomeRepository, incomeMapper);
    }
}
