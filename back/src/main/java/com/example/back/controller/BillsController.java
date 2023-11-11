package com.example.back.controller;

import com.example.back.dto.BillsDto;
import com.example.back.service.BillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/v1/bills",
consumes = MediaType.APPLICATION_JSON_VALUE,
produces = MediaType.APPLICATION_JSON_VALUE)
public class BillsController extends BaseController<BillsDto, Long> {

    @Autowired
    public BillsController(BillsService billsService) {
        super(billsService);
    }
}
