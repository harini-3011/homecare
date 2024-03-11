package com.example.backend.service;
import java.util.List;
import com.example.backend.dto.Servicedto;

public interface Serviceservice {
    Servicedto createService(Servicedto serviceDto);

    void deleteService(Long serviceId);
    Servicedto updateService(Long serviceId,Servicedto updateServicedto);
    
    List< Servicedto> getAllServices();
}

