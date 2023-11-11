package com.example.back.service;

import com.example.back.dto.WaterMeterDto;
import com.example.back.entity.enums.TypeWater;

import java.util.List;

public interface WaterMeterService extends BaseService<WaterMeterDto, Long> {

    List<WaterMeterDto> getDataByType(TypeWater type);
}
