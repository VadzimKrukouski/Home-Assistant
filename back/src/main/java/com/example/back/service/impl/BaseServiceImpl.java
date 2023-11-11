package com.example.back.service.impl;

import com.example.back.dto.BaseDto;
import com.example.back.entity.BaseEntity;
import com.example.back.mapper.BaseMapper;
import com.example.back.repository.BaseRepository;
import com.example.back.service.BaseService;
import com.example.back.util.RestUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

public abstract class BaseServiceImpl<E extends BaseEntity, D extends BaseDto, S> implements BaseService<D, S> {

    public BaseRepository<E, S> baseRepository;
    public BaseMapper<E, D> baseMapper;

    public BaseServiceImpl(BaseRepository<E, S> baseRepository, BaseMapper<E, D> baseMapper) {
        this.baseRepository = baseRepository;
        this.baseMapper = baseMapper;
    }

    @Override
    public Page<D> findAll(Pageable pageable) {
        return baseRepository.findAll(pageable).map(baseMapper::toDto);
    }

    @Override
    public D findById(S id) {
        return baseMapper.toDto(baseRepository.findById(id).orElseThrow(RestUtil.notFound("id = ", (Long) id)));
    }

    @Override
    public void create(D dto) {
        dto.setCreatedDate(LocalDateTime.now());
        dto.setUpdatedDate(LocalDateTime.now());
        baseRepository.save(baseMapper.fromDto(dto));
    }

    @Override
    public void update(D dto) {
        dto.setUpdatedDate(LocalDateTime.now());
        baseRepository.save(baseMapper.fromDto(dto));
    }

    @Override
    public void delete(S id) {

    }
}
