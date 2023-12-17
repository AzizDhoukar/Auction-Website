package com.example.auth.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    private String token;

    public long ExpiresIn;

    public String getToken() {
        return token;
    }

    // Getters and setters...
}
