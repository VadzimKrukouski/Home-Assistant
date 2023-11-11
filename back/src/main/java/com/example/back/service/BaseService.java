package com.example.back.service;

import com.example.back.dto.BaseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BaseService<D extends BaseDto, S> {

    Page<D> findAll(Pageable pageable);

    D findById(S id);

    void create(D dto);

    void update(D dto);

    void delete(S id);
}
