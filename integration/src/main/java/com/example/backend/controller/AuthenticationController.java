package com.example.backend.controller;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.AuthRequest;
import com.example.backend.entity.UserInfo;
import com.example.backend.repository.UserInfoRepository;
import com.example.backend.service.impl.JwtService;

import org.springframework.security.core.Authentication;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.backend.service.UserInfoService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/products")
public class AuthenticationController {
    @Autowired
    private UserInfoService serve;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

     @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo) {
            System.out.println(userInfo.getPassword());
            System.out.println("Called");
            userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
            repository.save(userInfo);
            return "user added to system ";
    }

    // @PostMapping("/authenticate")
    // public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    //     System.out.println(authRequest.getPassword());
    //     Authentication authentication = authenticationManager.authenticate(
    //             new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
    //     if (authentication.isAuthenticated()) {
    //         return jwtService.generateToken(authRequest.getUsername());
    //     } else {
    //         throw new UsernameNotFoundException("invalid user request !");
    //     }

    // }
    @PostMapping("/authenticate")
public ResponseEntity<Map<String, String>> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

    if (authentication.isAuthenticated()) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String roles = getUserRoles(userDetails.getUsername());
        int id=repository.findByName(authRequest.getUsername()).get().getId(); //1
        String token = jwtService.generateToken(authRequest.getUsername(), roles);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        response.put("roles", roles);
        response.put("id",String.valueOf(id)); //2

        return ResponseEntity.ok(response);
    } else {
        throw new UsernameNotFoundException("Invalid user request!");
    }
}


// Method to retrieve roles from the database
private String getUserRoles(String username) {
    List<String> roles = serve.getUserRolesByName(username);

    // Convert roles list to a comma-separated string
    return String.join(",", roles);
}
}
