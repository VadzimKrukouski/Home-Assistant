package com.example.back.entity;

import com.example.back.entity.enums.TypeBills;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "BILLS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Bills extends BaseEntity implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TYPE_BILLS")
    @Enumerated(value = EnumType.STRING)
    private TypeBills typeBills;

    @Column(name = "STORE_NAME")
    private String storeName;

    @Column(name = "SUM", nullable = false)
    private BigDecimal sum;

    @Column(name = "DESCRIPTION")
    private String description;
}
