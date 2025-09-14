package com.example.back.repository;

import com.example.back.entity.Income;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncomeRepository extends BaseRepository<Income, Long>{

    @Query(value = "SELECT *\n" +
            "FROM income \n" +
            "WHERE date >= date_trunc('month', current_date)\n" +
            "  AND date < date_trunc('month', current_date) + interval '1 month';", nativeQuery = true)
    List<Income> getIncomeByCurrentMonth();
}
