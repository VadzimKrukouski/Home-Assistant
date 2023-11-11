package com.example.back.mapper;

import com.example.back.dto.ElectricityMeterDto;
import com.example.back.entity.ElectricityMeter;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;

@Mapper(nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS, componentModel = "spring")
public interface ElectricityMeterMapper extends BaseMapper<ElectricityMeter, ElectricityMeterDto> {
}
