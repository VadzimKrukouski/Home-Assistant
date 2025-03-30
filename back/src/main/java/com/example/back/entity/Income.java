package com.example.back.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "INCOME")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Income extends BaseEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "INCOME", columnDefinition = "NUMERIC(20, 2)")
    private Double income;
}
