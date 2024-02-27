package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Feedbackdto {
    private Long id;
    private String name;
    private String email;
    private String feedback;;
    private Long range;
}
