package com.example.back.controller;

import com.example.back.dto.ElectricityMeterDto;
import com.example.back.service.ElectricityMeterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/v1/electricity-meter",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class ElectricityMeterController extends BaseController<ElectricityMeterDto, Long> {

    public ElectricityMeterController(ElectricityMeterService electricityMeterService) {
        super(electricityMeterService);
    }

    @GetMapping("/form-data")
    public ResponseEntity<List<ElectricityMeterDto>> getFormData() {
        return new ResponseEntity<>(((ElectricityMeterService) baseService).getAll(), HttpStatus.OK);
    }
}