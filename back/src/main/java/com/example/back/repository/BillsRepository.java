package com.example.back.repository;

import com.example.back.dto.statistic.GeneralStatisticQueryData;
import com.example.back.entity.Bills;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillsRepository extends BaseRepository<Bills, Long> {

    @Query(value = "select date_trunc('month',date) as month,\n" +
            "sum(sum)\n" +
            "from bills\n" +
            "group by date_trunc('month',date)\n" +
            "order by month", nativeQuery = true)
    List<GeneralStatisticQueryData> getGeneralStatisticByMonth();
}
