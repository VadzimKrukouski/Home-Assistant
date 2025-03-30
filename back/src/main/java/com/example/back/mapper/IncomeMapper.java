package com.example.back.mapper;

import com.example.back.dto.IncomeDto;
import com.example.back.entity.Income;
import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;

@Mapper(nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS, componentModel = "spring")
public interface IncomeMapper extends BaseMapper<Income, IncomeDto>{
}
