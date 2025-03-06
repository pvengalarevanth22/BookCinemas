package com.easyticket.easyticket.Controller;

import com.easyticket.easyticket.Models.Booking;
import com.easyticket.easyticket.Service.BookingService;
import com.easyticket.easyticket.dtos.BookingRegisterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<Booking> saveBooking(@RequestBody BookingRegisterDto bookingRegisterDto) {
        Booking booking=bookingService.saveBooking(bookingRegisterDto);
        ResponseEntity<Booking> response = new ResponseEntity<>(booking, HttpStatus.CREATED);
        return response;
    }
}
