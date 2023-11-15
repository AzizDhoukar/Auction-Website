package com.example.authservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("signup")
public class signupController {

    private UserRepository userRepository;

    public signupController(UserRepository userRepository){
        this.userRepository=userRepository;}
    @PostMapping
    public ResponseEntity<String> signup (@RequestBody User user){
        userRepository.save(user);
       return ResponseEntity.status(HttpStatus.OK).body("User saved");}
}
