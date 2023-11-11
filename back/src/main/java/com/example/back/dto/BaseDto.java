package com.example.back.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public abstract class BaseDto implements Serializable {

    private LocalDate date;

    private LocalDateTime createdDate;

    private LocalDateTime updatedDate;
}
