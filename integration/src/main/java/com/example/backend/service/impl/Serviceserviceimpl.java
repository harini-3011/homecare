package com.example.backend.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


import com.example.backend.dto.Servicedto;
import com.example.backend.entity.Services;
import com.example.backend.mapper.Servicemapper;
import com.example.backend.repository.Servicerepo;
import com.example.backend.service.Serviceservice;
import com.example.backend.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class Serviceserviceimpl implements Serviceservice {
       private Servicerepo serviceRepository;

    @Override
    public Servicedto createService(Servicedto servicedto) {

        Services service = Servicemapper.maptoEmployee(servicedto);
        Services savedService = serviceRepository.save(service);
        return Servicemapper.maptoEmployeeDto(savedService);
    }
     @Override
    public List<Servicedto> getAllServices() {
        List<Services> services = serviceRepository.findAll();

        List<Servicedto> ServiceDtos = new ArrayList<>();
        for (Services service : services) {
            ServiceDtos.add(Servicemapper.maptoEmployeeDto(service));
        }
        return ServiceDtos;
}
@Override
    public Servicedto updateService(Long serviceId, Servicedto updatedServicesDto) {
        Services existingServices = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Services not found with id: " + serviceId));

        // Update the existing Services with the values from updatedServicesDto
        existingServices.setName(updatedServicesDto.getName());
        existingServices.setDescription(updatedServicesDto.getDescription());
        existingServices.setCharge(updatedServicesDto.getCharge());
        existingServices.setImage(updatedServicesDto.getImage());

        Services updatedServices = serviceRepository.save(existingServices);
        return Servicemapper.maptoEmployeeDto(updatedServices);
    }

    @Override
    public void deleteService(Long serviceId) {
        Services existingServices = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Services not found with id: " + serviceId));

        serviceRepository.delete(existingServices);
    }
}