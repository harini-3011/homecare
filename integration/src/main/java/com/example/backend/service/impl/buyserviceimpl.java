package com.example.backend.service.impl;

import com.example.backend.entity.buyservice;
import com.example.backend.repository.buyservicerepo;
import com.example.backend.service.buyserviceservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
// import java.util.Optional;

@Service
public class buyserviceimpl implements buyserviceservice{

    @Autowired
    private buyservicerepo buyserviceRepository;

    @Override
    public List<buyservice> getAllBuyservices() {
        return buyserviceRepository.findAll();
    }

    // @Override
    // public Optional<buyservice> getBuyserviceById(Long id) {
    //     return buyserviceRepository.findById(id);
    // }

    @Override
    public buyservice addBuyservice(buyservice buyservice) {
        return buyserviceRepository.save(buyservice);
    }

    // Additional methods like updateBuyservice, deleteBuyservice, etc., can be implemented here
}
