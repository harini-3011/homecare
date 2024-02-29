package com.example.backend.mapper;

import com.example.backend.entity.Services;
import com.example.backend.dto.Servicedto;

public class Servicemapper {
    public static Servicedto maptoEmployeeDto(Services service) {
        return new Servicedto(
                service.getId(),
                service.getName(),
                service.getDescription(),
                service.getCharge(),
                service.getImage());
    }

    public static Services maptoEmployee(Servicedto servicedto) {
        return new Services(
                servicedto.getId(),
                servicedto.getName(),
                servicedto.getDescription(),
                servicedto.getCharge(),
                servicedto.getImage());
    }   
}