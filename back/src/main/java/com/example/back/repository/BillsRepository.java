package com.example.back.repository;

import com.example.back.dto.statistic.GeneralStatisticQueryData;
import com.example.back.entity.Bills;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillsRepository extends BaseRepository<Bills, Long> {

    @Query(value = "SELECT \n" +
            "    COALESCE(b.month, i.month) AS month,\n" +
            "    COALESCE(b.total_bills, 0) AS totalBills,\n" +
            "    COALESCE(i.total_income, 0) AS totalIncome\n" +
            "FROM \n" +
            "    (SELECT \n" +
            "        CAST(date_trunc('month', date) AS DATE) AS month,\n" +
            "        SUM(sum) AS total_bills\n" +
            "     FROM bills\n" +
            "     GROUP BY date_trunc('month', date)\n" +
            "    ) AS b\n" +
            "FULL OUTER JOIN\n" +
            "    (SELECT \n" +
            "        CAST(date_trunc('month', date) AS DATE) AS month,\n" +
            "        SUM(income) AS total_income\n" +
            "     FROM income\n" +
            "     GROUP BY date_trunc('month', date)\n" +
            "    ) AS i\n" +
            "ON b.month = i.month\n" +
            "ORDER BY month;", nativeQuery = true)
    List<GeneralStatisticQueryData> getGeneralStatisticByMonth();

    @Query(value = "select CAST(date_trunc('month', date) AS DATE) as month,\n" +
            "sum(sum) as totalBills \n" +
            "from bills\n" +
            "where type_bills = :type\n" +
            "group by date_trunc('month',date)\n" +
            "order by month", nativeQuery = true)
    List<GeneralStatisticQueryData> getStatisticByMonthAndType(@Param("type") String type);
}
