package com.example.backend.service.impl;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.example.backend.service.Feedbackservice;
import com.example.backend.repository.Feedbackrepo;
import com.example.backend.dto.Feedbackdto;
import com.example.backend.entity.FeedBack;
import com.example.backend.mapper.Feedbackmapper;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class Feedbackserviceimpl implements Feedbackservice {
      private Feedbackrepo feedbackRepository;
    @Override
    public List<Feedbackdto> getAllFeedbacks() {
        List<FeedBack> feedbacks = feedbackRepository.findAll();

        List<Feedbackdto> feedbackDtos = new ArrayList<>();
        for (FeedBack feedback : feedbacks) {
            feedbackDtos.add(Feedbackmapper.maptoEmployeeDto(feedback));
        }

        return feedbackDtos;
    }
}
