package com.example.backend.service;

import com.example.backend.entity.buyservice;

import java.util.List;
// import java.util.Optional;

public interface buyserviceservice {
    List<buyservice> getAllBuyservices();

    //Optional<buyservice> getBuyserviceById(Long id);

    buyservice addBuyservice(buyservice buyservice);

    // Additional methods like updateBuyservice, deleteBuyservice, etc., can be added here
}
