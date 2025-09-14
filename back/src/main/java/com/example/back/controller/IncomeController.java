package com.example.back.controller;

import com.example.back.dto.IncomeDto;
import com.example.back.service.IncomeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/v1/incomes",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
public class IncomeController extends BaseController<IncomeDto, Long>{

    public IncomeController(IncomeService incomeService) {
        super(incomeService);
    }

    @GetMapping(path = "incomes-by-month")
    public ResponseEntity<List<IncomeDto>> getIncomesByCurrentMonth() {
        List<IncomeDto> incomeForCurrentMonth = ((IncomeService) baseService).getIncomeForCurrentMonth();
        return new ResponseEntity<>(incomeForCurrentMonth, HttpStatus.OK);
    }
}
