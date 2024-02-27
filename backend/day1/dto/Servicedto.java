package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Servicedto {
    private Long id;
    private String name;
    private String description;
    private Long charge;
    private byte[] image;
}
