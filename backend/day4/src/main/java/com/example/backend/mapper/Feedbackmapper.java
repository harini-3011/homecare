package com.example.backend.mapper;

import com.example.backend.dto.Feedbackdto;
import com.example.backend.entity.FeedBack;

public class Feedbackmapper {
    public static Feedbackdto maptoEmployeeDto(FeedBack feedback) {
        return new Feedbackdto(
            feedback.getId(),
            feedback.getName(),
            feedback.getEmail(),
            feedback.getFeedback(),
            feedback.getRange());
    }

    public static FeedBack maptoEmployee(Feedbackdto feedbackdto) {
        return new FeedBack(
            feedbackdto.getId(),
            feedbackdto.getName(),
            feedbackdto.getEmail(),
            feedbackdto.getFeedback(),
            feedbackdto.getRange());
    }   
}
