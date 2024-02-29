package com.example.backend.mapper;

import com.example.backend.dto.Registerdto;
import com.example.backend.entity.Register;

public class Registermapper {
    public static Registerdto maptoEmployeeDto(Register register) {
        return new Registerdto(
                register.getId(),
                register.getName(),
                register.getEmail(),
                register.getPassword(),
                register.getRoles());
    }

    public static Register maptoEmployee(Registerdto registerdto) {
        return new Register(
                registerdto.getId(),
                registerdto.getName(),
                registerdto.getEmail(),
                registerdto.getPassword(),
                registerdto.getRoles());
    }   
}
