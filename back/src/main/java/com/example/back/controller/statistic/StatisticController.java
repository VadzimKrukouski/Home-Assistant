package com.example.back.controller.statistic;

import com.example.back.service.statistic.StatisticService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/v1/statistic",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class StatisticController {

    private final StatisticService service;

    @GetMapping("/general")
    public ResponseEntity<?> getGeneralStatisticByMonth() {
        try {
            return new ResponseEntity<>(service.getGeneralStatisticByMonth(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/monthByType/{type}")
    public ResponseEntity<?> getMonthlyStatisticByType(@PathVariable String type) {
        try {
            return new ResponseEntity<>(service.getMonthlyStatisticByType(type), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
