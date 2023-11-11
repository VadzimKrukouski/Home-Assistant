package com.example.back.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@MappedSuperclass
public abstract class BaseEntity implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Column(name = "DATE")
    private LocalDate date;

    @Column(name = "CREATED_DATE", columnDefinition = "TIMESTAMP")
    @CreatedDate
    private LocalDateTime createdDate;

    @Column(name = "UPDATED_DATE", columnDefinition = "TIMESTAMP")
    @LastModifiedDate
    private LocalDateTime updatedDate;
}
