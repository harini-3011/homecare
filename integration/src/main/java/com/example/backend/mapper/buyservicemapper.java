package com.example.backend.mapper;

import com.example.backend.dto.buyservicedto;
import com.example.backend.entity.buyservice;

public class buyservicemapper {
    public static buyservicedto maptoEmployeeDto(buyservice buy)
    {
        return new buyservicedto(
            buy.getId(),
            buy.getName(),
            buy.getEmail(),
            buy.getServicename(),
            buy.getDays(),
            buy.getDate()
        );
    }
    public static buyservice maptoEmployee(buyservicedto buydto)
    {
        return new buyservice(
            buydto.getId(),
            buydto.getName(),
            buydto.getEmail(),
            buydto.getServicename(),
            buydto.getDays(),
            buydto.getDate()
        );
    }
}
