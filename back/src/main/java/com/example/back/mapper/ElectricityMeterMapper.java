package com.example.back.mapper;

import com.example.back.dto.ElectricityMeterDto;
import com.example.back.entity.ElectricityMeter;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;

@Mapper(nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS, componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ElectricityMeterMapper extends BaseMapper<ElectricityMeter, ElectricityMeterDto> {
}
