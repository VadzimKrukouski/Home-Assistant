package com.example.back.service.impl;

import com.example.back.dto.WaterMeterDto;
import com.example.back.entity.WaterMeter;
import com.example.back.entity.enums.TypeWater;
import com.example.back.mapper.WaterMeterMapper;
import com.example.back.repository.WaterMeterRepository;
import com.example.back.service.WaterMeterService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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
        calculateDiff(waterMeterDtos);
        return waterMeterDtos;
    }

    private void calculateDiff(List<WaterMeterDto> list) {
        for (int i = 0; i < list.size(); i++) {
            if (i == 0) {
                list.get(i).setDiff(new BigDecimal("0"));
                continue;
            }
            WaterMeterDto current = list.get(i);
            WaterMeterDto prev = list.get(i - 1);
            BigDecimal subtract = current.getMeterReading().subtract(prev.getMeterReading());
            current.setDiff(subtract);
        }
    }
}
