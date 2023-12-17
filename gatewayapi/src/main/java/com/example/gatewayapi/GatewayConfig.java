package com.example.gatewayapi;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("auth", r -> r.path("/gateway/auth/**")
                        .uri("http://localhost:8081"))
                .route("chat", r -> r.path("/gateway/chat/**")
                        .uri("http://localhost:8082"))
                .route("info", r -> r.path("/gateway/info/**")
                        .uri("http://localhost:8083"))
                .build();
    }
}

