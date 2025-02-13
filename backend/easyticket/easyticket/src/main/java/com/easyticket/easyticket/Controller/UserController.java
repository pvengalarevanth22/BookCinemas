package com.easyticket.easyticket.Controller;

import com.easyticket.easyticket.Enums.ResponseError;
import com.easyticket.easyticket.Models.User;
import com.easyticket.easyticket.Service.UserService;
import com.easyticket.easyticket.dtos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public UserRegistrationResponseDto userRegistration(@RequestBody UserRegistrationRequestDto userRegistrationRequestDto){
        UserRegistrationResponseDto userRegistrationResponseDto = new UserRegistrationResponseDto();
        User user;
        try{
            user= userService.registerUser(userRegistrationRequestDto.getFirstName(),userRegistrationRequestDto.getLastName(), userRegistrationRequestDto.getEmail(),
                    userRegistrationRequestDto.getPassword(),userRegistrationRequestDto.getPhoneNumber());
            userRegistrationResponseDto.setResponseError(ResponseError.SUCCESS);
            userRegistrationResponseDto.setName(user.getFirstName()+" "+user.getLastName());
            userRegistrationResponseDto.setUserId(user.getId());

        } catch (Exception e) {
            userRegistrationResponseDto.setResponseError(ResponseError.FAILED);
        }
        return userRegistrationResponseDto;
    }

    @PostMapping("/login")
    public UserLoginResponseDto userLogin(@Validated @RequestBody UserLoginRequestDto userLoginRequestDto){
        UserLoginResponseDto userLoginResponseDto = new UserLoginResponseDto();
        try{
            User user=userService.loginUser(userLoginRequestDto.getEmail(),userLoginRequestDto.getPassword());
            userLoginResponseDto.setUserId(user.getId());
            userLoginResponseDto.setFirstName(user.getFirstName());
            userLoginResponseDto.setLastName(user.getLastName());
            userLoginResponseDto.setMessage("Login Successful");
        } catch (Exception e) {
            userLoginResponseDto.setMessage("Invalid email or password");
        }

        return userLoginResponseDto;
    }

    @GetMapping("/{id}")
    public UserResponseDetailsDto getUserAccountPlan(@PathVariable String id){
        UserResponseDetailsDto userResponseDetailsDto = new UserResponseDetailsDto();
        User user=userService.getUserById(id);
        userResponseDetailsDto.setUser(user);
        return userResponseDetailsDto;
    }

}
