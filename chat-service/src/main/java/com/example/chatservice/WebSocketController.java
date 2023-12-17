package com.example.chatservice;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@MessageMapping("/socket")
public class WebSocketController {

    @SendTo("/socketfront")
    public String send(String socket){
        return "received" + "hello world";
    }
}
