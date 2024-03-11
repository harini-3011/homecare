package com.example.backend.mapper;
import com.example.backend.entity.Profile;
import com.example.backend.dto.Profiledto;


public class Profilemapper {
    public static Profiledto maptoEmployeeDto(Profile profile) {
        return new Profiledto(
            profile.getId(),
            profile.getName(),
            profile.getEmail(),
            profile.getAge(),
            profile.getGender(),
            profile.getImage());
    }

    public static Profile maptoEmployee(Profiledto profiledto) {
        return new Profile(
            profiledto.getId(),
            profiledto.getName(),
            profiledto.getEmail(),
            profiledto.getAge(),
            profiledto.getGender(),
            profiledto.getImage());
    }   
}
