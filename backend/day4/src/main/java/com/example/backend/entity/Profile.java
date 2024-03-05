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
import java.sql.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="profile")

public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="Name",nullable=false)
    private String name;

    @Column(name="Email",nullable=false,unique=true)
    private String email;

    @Column(name="Age",nullable=false)
    private Long age;

    @Column(name="Gender",nullable = false)
    private String gender;

    @Column(name="DOB",nullable = false)
    private Date dob;
    @Lob
    @Column(name="Image",nullable = false)
    private byte[] image;


}



