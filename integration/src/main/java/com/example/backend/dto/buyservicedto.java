package com.example.backend.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class buyservicedto {
    private Long id;
    private String name;
    private String email;
    private String servicename;
    private Long days;
    private String date;
}
