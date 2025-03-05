package com.example.back.controller;

import com.example.back.dto.BaseDto;
import com.example.back.service.BaseService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public abstract class BaseController<D extends BaseDto, L> {

    public BaseService<D,L> baseService;

    public BaseController(BaseService<D, L> baseService) {
        this.baseService = baseService;
    }

    @GetMapping
    public ResponseEntity<Page<D>> findAll(Pageable pageable) {
        Page<D> all = baseService.findAll(pageable);
        return new ResponseEntity<>(all, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<D> findById(@PathVariable L id) {
        D dto = baseService.findById(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<D> create(@RequestBody D dto) {
        baseService.create(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<D> update(@RequestBody D dto) {
        baseService.update(dto);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<D> delete(@PathVariable("id") L id) {
        baseService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
