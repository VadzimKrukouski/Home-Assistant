package com.example.back.controller;

import com.example.back.dto.WaterHeatingMeterDto;
import com.example.back.service.WaterHeatingMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/v1/water-heating-meter",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
public class WaterHeatingMeterController extends BaseController<WaterHeatingMeterDto, Long> {

    @Autowired
    public WaterHeatingMeterController(WaterHeatingMeterService waterHeatingMeterService) {
        super(waterHeatingMeterService);
    }
}
