package com.example.back.service.impl;

import com.example.back.dto.BillsDto;
import com.example.back.entity.Bills;
import com.example.back.mapper.BillsMapper;
import com.example.back.repository.BillsRepository;
import com.example.back.service.BillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillsServiceImpl extends BaseServiceImpl<Bills, BillsDto, Long> implements BillsService {

    @Autowired
    public BillsServiceImpl(BillsRepository billsRepository,
                            BillsMapper billsMapper) {
        super(billsRepository, billsMapper);
    }
}
