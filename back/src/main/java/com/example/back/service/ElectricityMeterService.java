package com.example.back.service;

import com.example.back.dto.ElectricityMeterDto;

import java.util.List;

public interface ElectricityMeterService extends BaseService<ElectricityMeterDto, Long> {

    List<ElectricityMeterDto> getAll();
}
