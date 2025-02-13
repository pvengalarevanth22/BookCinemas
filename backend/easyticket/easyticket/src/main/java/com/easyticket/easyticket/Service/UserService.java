package com.easyticket.easyticket.Service;

import com.easyticket.easyticket.Models.User;
import com.easyticket.easyticket.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(String firstName, String lastName, String email, String password,
                            String phoneNumber ) {

        User user=new User();

        try {
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setEmail(email);

            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            user.setPassword(bCryptPasswordEncoder.encode(password));

            user.setPhoneNumber(phoneNumber);
        } catch (Exception exception) {
            throw new RuntimeException("Error registering user", exception);
        }

        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {
        User user=userRepository.findByEmail(email);

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        if(!bCryptPasswordEncoder.matches(password, user.getPassword())){
            throw new RuntimeException("Incorrect password");
        }
        return user;
    }

    public User getUserById(String userId){
        User user=userRepository.findUserById(userId);
        if(user==null){
            throw new RuntimeException("User does not exist");
        }
        return user;
    }


}
