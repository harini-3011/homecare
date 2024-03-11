package com.example.backend.mapper;

import com.example.backend.dto.UserInfoDto;
import com.example.backend.entity.UserInfo;

public class UserInfoMapper {

    public static UserInfoDto mapToUserInfoDto(UserInfo userInfo) {
        UserInfoDto userInfoDto = new UserInfoDto();
        userInfoDto.setId(userInfo.getId());
        userInfoDto.setName(userInfo.getName());
        userInfoDto.setEmail(userInfo.getEmail());
        userInfoDto.setPassword(userInfo.getPassword());
        userInfoDto.setRoles(userInfo.getRoles());
        return userInfoDto;
    }

    public static UserInfo mapToUserInfo(UserInfoDto userInfoDto) {
        UserInfo userInfo = new UserInfo();
        userInfo.setId(userInfoDto.getId());
        userInfo.setName(userInfoDto.getName());
        userInfo.setEmail(userInfoDto.getEmail());
        userInfo.setPassword(userInfoDto.getPassword());
        userInfo.setRoles(userInfoDto.getRoles());
        return userInfo;
    }
}
