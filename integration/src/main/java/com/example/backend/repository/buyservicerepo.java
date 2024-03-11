package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.entity.buyservice;
public interface buyservicerepo extends JpaRepository<buyservice,Long> {
    
}
