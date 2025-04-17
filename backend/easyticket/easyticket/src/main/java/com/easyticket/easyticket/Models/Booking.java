package com.easyticket.easyticket.Models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class Booking extends BaseModel{

    private String movieId;

    private String seatNumber;
    private Date bookedDate;
    private String time;
    private Integer price;

}
