package com.example.back.service.impl;

import com.example.back.dto.WaterHeatingMeterDto;
import com.example.back.entity.WaterHeatingMeter;
import com.example.back.mapper.BaseMapper;
import com.example.back.mapper.WaterHeatingMeterMapper;
import com.example.back.repository.BaseRepository;
import com.example.back.repository.WaterHeatingMeterRepository;
import com.example.back.service.WaterHeatingMeterService;
import org.springframework.stereotype.Service;

@Service
public class WaterHeatingMeterServiceImpl extends BaseServiceImpl<WaterHeatingMeter, WaterHeatingMeterDto, Long> implements WaterHeatingMeterService {

    public WaterHeatingMeterServiceImpl(WaterHeatingMeterRepository waterHeatingMeterRepository,
                                        WaterHeatingMeterMapper waterHeatingMeterMapper) {
        super(waterHeatingMeterRepository, waterHeatingMeterMapper);
    }
}
