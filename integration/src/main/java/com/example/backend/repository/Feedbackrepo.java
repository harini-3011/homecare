package com.example.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.FeedBack;
public interface Feedbackrepo extends JpaRepository<FeedBack, Long> {

}

