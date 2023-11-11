package com.example.back.controller;

import com.example.back.dto.ElectricityMeterDto;
import com.example.back.service.ElectricityMeterService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/v1/electricityMeter"
//        consumes = MediaType.APPLICATION_JSON_VALUE,
//        produces = MediaType.APPLICATION_JSON_VALUE
)
public class ElectricityMeterController extends BaseController<ElectricityMeterDto, Long> {

    public ElectricityMeterController(ElectricityMeterService electricityMeterService) {
        super(electricityMeterService);
    }
}