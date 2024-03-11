package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.Feedbackdto;

public interface Feedbackservice {
    List<Feedbackdto> getAllFeedbacks();
    Feedbackdto createFeedback(Feedbackdto feedbackDto);
}
