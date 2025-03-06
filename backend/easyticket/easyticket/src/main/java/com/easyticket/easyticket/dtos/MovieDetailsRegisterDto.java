package com.easyticket.easyticket.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class MovieDetailsRegisterDto {
    private String imageUrl;
    private String title;
    private int rating;
    private String duration;
    private Date releaseDate;
}
