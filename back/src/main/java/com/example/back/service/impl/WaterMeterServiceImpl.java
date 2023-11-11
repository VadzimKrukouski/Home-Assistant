package com.example.back.service.impl;

import com.example.back.dto.WaterMeterDto;
import com.example.back.entity.WaterMeter;
import com.example.back.entity.enums.TypeWater;
import com.example.back.mapper.WaterMeterMapper;
import com.example.back.repository.WaterMeterRepository;
import com.example.back.service.WaterMeterService;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class WaterMeterServiceImpl extends BaseServiceImpl<WaterMeter, WaterMeterDto, Long> implements WaterMeterService {

    public WaterMeterServiceImpl(WaterMeterRepository waterMeterRepository,
                                 WaterMeterMapper waterMeterMapper) {
        super(waterMeterRepository, waterMeterMapper);
    }

    @Override
    public List<WaterMeterDto> getDataByType(TypeWater type) {
        List<WaterMeter> waterMeters = ((WaterMeterRepository) baseRepository).findWaterMeterByTypeWater(type);
        List<WaterMeterDto> waterMeterDtos = baseMapper.toDtoList(waterMeters);
        waterMeterDtos.sort(Comparator.comparing(WaterMeterDto::getDate));
        return waterMeterDtos;
    }
}
