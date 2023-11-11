package com.example.back.repository;

import com.example.back.entity.WaterMeter;
import com.example.back.entity.enums.TypeWater;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WaterMeterRepository extends BaseRepository<WaterMeter, Long> {

    List<WaterMeter> findWaterMeterByTypeWater(TypeWater typeWater);
}
