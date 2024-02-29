package com.example.backend.service.impl;

import java.util.ArrayList;
import java.util.List;


import org.springframework.stereotype.Service;

import com.example.backend.dto.Registerdto;
import com.example.backend.entity.Register;
import com.example.backend.mapper.Registermapper;
import com.example.backend.repository.Registerrepo;
import com.example.backend.service.Registerservice;
import com.example.backend.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class Registerserviceimpl implements Registerservice {

    private Registerrepo registerRepository;

    @Override
    public Registerdto createRegister(Registerdto registerdto) {

        Register register = Registermapper.maptoEmployee(registerdto);
        Register savedRegister = registerRepository.save(register);
        return Registermapper.maptoEmployeeDto(savedRegister);
    }

    @Override
    public Registerdto getRegisterById(Long registerId) {
        Register employee = registerRepository.findById(registerId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("User is not exist with given id : " + registerId));

        return Registermapper.maptoEmployeeDto(employee);
    }

    @Override
    public List<Registerdto> getAllRegisters() {
        List<Register> registers = registerRepository.findAll();

        List<Registerdto> registerDtos = new ArrayList<>();
        for (Register register : registers) {
            registerDtos.add(Registermapper.maptoEmployeeDto(register));
        }

        return registerDtos;
    }

}

