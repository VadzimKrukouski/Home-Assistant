package com.example.back.controller;

import com.example.back.dto.WaterMeterDto;
import com.example.back.entity.enums.TypeWater;
import com.example.back.service.WaterMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/v1/water-meter",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
public class WaterMeterController extends BaseController<WaterMeterDto, Long> {

    @Autowired
    public WaterMeterController(WaterMeterService waterMeterService) {
        super(waterMeterService);
    }

    @GetMapping("/formData")
    public ResponseEntity<List<WaterMeterDto>> getDataByType(@RequestParam("type") TypeWater type) {
        return new ResponseEntity<>(((WaterMeterService) baseService).getDataByType(type), HttpStatus.OK);
    }
}
