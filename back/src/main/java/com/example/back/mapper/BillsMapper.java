package com.example.back.mapper;

import com.example.back.dto.BillsDto;
import com.example.back.entity.Bills;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;

@Mapper(nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS, componentModel = "spring")
public interface BillsMapper extends BaseMapper<Bills, BillsDto> {
}
