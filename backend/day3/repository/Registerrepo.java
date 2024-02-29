package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.example.backend.entity.Register;
public interface Registerrepo extends JpaRepository<Register, Long> {
    Optional<Register> findByName(String name);
}

