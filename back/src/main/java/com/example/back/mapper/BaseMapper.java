package com.example.back.mapper;

import com.example.back.dto.BaseDto;
import com.example.back.entity.BaseEntity;

import java.util.List;

public interface BaseMapper<E extends BaseEntity, D extends BaseDto> {

    D toDto(E e);

    E fromDto(D d);

    List<D> toDtoList(List<E> e);

    List<E> fromDtoList(List<D> d);
}
