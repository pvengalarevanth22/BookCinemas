package com.easyticket.easyticket.dtos;

import com.easyticket.easyticket.Enums.ResponseError;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationResponseDto {
    private String name;
    private String userId;
    private ResponseError responseError;
}
