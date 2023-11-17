package com.example.gatewayapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;

@SpringBootApplication
public class GatewayapiApplication {

    public static void main(String[] args) {
        SpringApplication.run(GatewayapiApplication.class, args);
        System.out.println("gateway_api is working properly");
    }




}
