package com.example.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Lob;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="register")

public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="Name",nullable=false)
    private String name;

    @Column(name="Description",nullable=false)
    private String description;

    @Column(name="Charge",nullable=false)
    private Long charge;

    @Lob
    @Column(name="Image",nullable = false)
    private byte[] image;


}


