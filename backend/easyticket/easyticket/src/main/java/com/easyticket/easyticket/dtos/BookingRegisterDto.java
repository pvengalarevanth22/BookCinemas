package com.easyticket.easyticket.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class BookingRegisterDto {
    private String movieId;
    private String seatNumber;
    private Date bookedDate;
    private String time;
    private Integer price;
}
