package com.example.back.controller;

import com.example.back.dto.IncomeDto;
import com.example.back.service.IncomeService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/v1/incomes",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
public class IncomeController extends BaseController<IncomeDto, Long>{

    public IncomeController(IncomeService incomeService) {
        super(incomeService);
    }
}
