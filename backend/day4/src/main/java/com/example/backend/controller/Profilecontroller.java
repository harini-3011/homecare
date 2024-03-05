package com.example.backend.controller;

import com.example.backend.dto.Profiledto;
import com.example.backend.service.Profileservice;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profiles")
public class Profilecontroller {

    private final Profileservice profileService;

    public Profilecontroller(Profileservice profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public ResponseEntity<List<Profiledto>> getAllProfiles() {
        List<Profiledto> profiles = profileService.getAllProfiles();
        return ResponseEntity.ok(profiles);
    }

    @PutMapping("/{profileId}")
    public ResponseEntity<Profiledto> updateProfile(@PathVariable Long profileId, @RequestBody Profiledto updatedProfileDto) {
        Profiledto updatedProfile = profileService.updateProfile(profileId, updatedProfileDto);
        return ResponseEntity.ok(updatedProfile);
    }
}
