package com.example.backend.controller;


import com.example.backend.dto.Feedbackdto;
import com.example.backend.service.Feedbackservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/feedbacks")
public class Feedbackcontroller {

    private final Feedbackservice feedbackService;

    
    public Feedbackcontroller(Feedbackservice feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping
    public ResponseEntity<List<Feedbackdto>> getAllFeedbacks() {
        List<Feedbackdto> feedbackDtos = feedbackService.getAllFeedbacks();
        return new ResponseEntity<>(feedbackDtos, HttpStatus.OK);
    }
}
