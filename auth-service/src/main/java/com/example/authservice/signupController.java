package com.example.authservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("signup")
public class signupController {

    private UserRepository userRepository;

    public signupController(UserRepository userRepository){
        this.userRepository=userRepository;}
    @PostMapping
    public ResponseEntity<String> signup (@RequestBody User user){
        userRepository.save(user);
        System.out.print(user.email);
       return ResponseEntity.status(HttpStatus.OK).body("User saved");}
    @GetMapping
    public ResponseEntity<String> signup1 (){
        System.out.println("get api is working");
        return ResponseEntity.status(HttpStatus.OK).body("User saved");}

}
