package com.example.back.dto;

import com.example.back.entity.enums.TypeBills;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@EqualsAndHashCode(callSuper = true)
public class BillsDto extends BaseDto implements Serializable {

    private Long id;

    private TypeBills typeBills;

    private String storeName;

    private BigDecimal sum;

    private String description;
}
