package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.Registerdto;


public interface Registerservice {
    Registerdto createRegister(Registerdto registerDto);

    Registerdto getRegisterById(Long registerId);

    List<Registerdto> getAllRegisters();
}
