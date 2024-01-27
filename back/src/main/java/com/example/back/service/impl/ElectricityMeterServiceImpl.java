package com.example.back.service.impl;

import com.example.back.dto.ElectricityMeterDto;
import com.example.back.entity.ElectricityMeter;
import com.example.back.mapper.ElectricityMeterMapper;
import com.example.back.repository.ElectricityMeterRepository;
import com.example.back.service.ElectricityMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class ElectricityMeterServiceImpl extends BaseServiceImpl<ElectricityMeter, ElectricityMeterDto, Long> implements ElectricityMeterService {

    @Autowired
    public ElectricityMeterServiceImpl(ElectricityMeterRepository electricityMeterRepository,
                                       ElectricityMeterMapper electricityMeterMapper) {
        super(electricityMeterRepository, electricityMeterMapper);
    }

    @Override
    public List<ElectricityMeterDto> getAll() {
        List<ElectricityMeter> electricityMeterList = baseRepository.findAll();
        List<ElectricityMeterDto> electricityMeterDtos = baseMapper.toDtoList(electricityMeterList);
        electricityMeterDtos.sort(Comparator.comparing(ElectricityMeterDto::getDate));
        calculateDiff(electricityMeterDtos);
        return electricityMeterDtos;
    }

    private void calculateDiff(List<ElectricityMeterDto> list) {
        for (int i = 0; i < list.size(); i++) {
            if (i == 0) {
                list.get(i).setDiff(0);
                continue;
            }
            ElectricityMeterDto current = list.get(i);
            ElectricityMeterDto prev = list.get(i - 1);
            current.setDiff(current.getMeterReading() - prev.getMeterReading());
        }
    }
}
