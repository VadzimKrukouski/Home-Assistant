package com.example.back.mapper;

import com.example.back.dto.WaterHeatingMeterDto;
import com.example.back.entity.WaterHeatingMeter;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;

@Mapper(nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS, componentModel = "spring")
public interface WaterHeatingMeterMapper extends BaseMapper<WaterHeatingMeter, WaterHeatingMeterDto> {
}
