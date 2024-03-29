package com.example.back.mapper;

import com.example.back.dto.WaterMeterDto;
import com.example.back.entity.WaterMeter;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;

@Mapper(nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS, componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface WaterMeterMapper extends BaseMapper<WaterMeter, WaterMeterDto> {
}
