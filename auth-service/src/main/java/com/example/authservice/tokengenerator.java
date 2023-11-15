package com.example.authservice;

import org.springframework.stereotype.Service;

import java.security.Key;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class tokengenerator {


    private static Key getSigningKey() {
        return Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }



    public String generatetoken(String subject){
        return Jwts.builder()
                .setSubject(subject)
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

}
