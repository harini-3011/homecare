package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.backend.entity.Services;
public interface Servicerepo extends JpaRepository<Services, Long> {

}

