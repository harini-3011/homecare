package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.Profiledto;



public interface Profileservice {
    Profiledto updateProfile(Long profileId,Profiledto updatedProfiledto);
    List<Profiledto> getAllProfiles();
}

