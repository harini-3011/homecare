package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.UserInfoDto;

public interface UserInfoService {

    UserInfoDto getUserInfoById(Integer userId);

    UserInfoDto updateUserInfo(Integer userId, UserInfoDto userInfoDto);

    void deleteUserInfo(Integer userId);

    List<String> getUserRolesByName(String username);

    Integer getUserIdByName(String username);

}
