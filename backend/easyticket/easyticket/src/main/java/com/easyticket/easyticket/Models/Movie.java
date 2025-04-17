package com.easyticket.easyticket.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Movie extends BaseModel{
    private String imageUrl;
    private String title;
    private int rating;
    private String duration;
    private Date releaseDate;
}
