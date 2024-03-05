package com.example.backend.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Profiledto {
    private Long id;
    private String name;
    private String email;
    private Long age;
    private String gender;
    private Date date;
    private byte[] image;
}
