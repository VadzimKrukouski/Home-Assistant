package com.example.back.repository;

import com.example.back.entity.Bills;
import org.springframework.stereotype.Repository;

@Repository
public interface BillsRepository extends BaseRepository<Bills, Long> {
}
