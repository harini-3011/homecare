package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.Profile;
public interface Profilerepo extends JpaRepository<Profile, Long> {

}
