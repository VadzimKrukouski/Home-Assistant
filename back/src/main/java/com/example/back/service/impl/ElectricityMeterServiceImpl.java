package com.example.back.service.impl;

import com.example.back.dto.ElectricityMeterDto;
import com.example.back.entity.ElectricityMeter;
import com.example.back.mapper.BaseMapper;
import com.example.back.mapper.ElectricityMeterMapper;
import com.example.back.repository.BaseRepository;
import com.example.back.repository.ElectricityMeterRepository;
import com.example.back.service.ElectricityMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ElectricityMeterServiceImpl extends BaseServiceImpl<ElectricityMeter, ElectricityMeterDto, Long> implements ElectricityMeterService {

    @Autowired
    public ElectricityMeterServiceImpl(ElectricityMeterRepository electricityMeterRepository,
                                       ElectricityMeterMapper electricityMeterMapper) {
        super(electricityMeterRepository, electricityMeterMapper);
    }


}
