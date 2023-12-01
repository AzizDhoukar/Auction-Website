package com.example.authservice;

import org.springframework.stereotype.Service;

@Service
public class daoUser {

    private  UserRepository userRepository;
    public daoUser (UserRepository userRepository) {
        this.userRepository=userRepository;
    }


    public Boolean checkuser(User user){
        if(userRepository.findFirstByEmail(user.getEmail()).isPresent() && userRepository.findFirstByEmail(user.getEmail()).get().getPassword().equals(user.getPassword())){
            return true;
        }
        else{
            return false;
        }
                

    }
}
