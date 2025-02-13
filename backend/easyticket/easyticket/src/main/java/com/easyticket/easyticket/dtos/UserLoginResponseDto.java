package com.easyticket.easyticket.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginResponseDto {
    private String userId;
    private String firstName;
    private String lastName;
    private String message;
}
