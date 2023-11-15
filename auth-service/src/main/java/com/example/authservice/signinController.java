package com.example.authservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("signin")
public class signinController {

private tokengenerator tokengenerator;
private daoUser daoUser;
public signinController(tokengenerator token, daoUser daoUser){
    this.tokengenerator=token;
    this.daoUser=daoUser;
}
@PostMapping
    public ResponseEntity<String> signin(@RequestBody User user){
    if(daoUser.checkuser(user)){
        String token=tokengenerator.generatetoken(user.email);
        return ResponseEntity.status(HttpStatus.OK).body(token);}
    else {
    return ResponseEntity.status(HttpStatus.OK).body("Invalid credentials");
    }
    }
}

