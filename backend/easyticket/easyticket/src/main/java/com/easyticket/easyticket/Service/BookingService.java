package com.easyticket.easyticket.Service;

import com.easyticket.easyticket.Models.Booking;
import com.easyticket.easyticket.Models.Movie;
import com.easyticket.easyticket.Repository.BookingRepository;
import com.easyticket.easyticket.Repository.MovieRepository;
import com.easyticket.easyticket.dtos.BookingRegisterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    private BookingRepository bookingRepository;

    private MovieRepository movieRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository, MovieRepository movieRepository) {
        this.bookingRepository = bookingRepository;
        this.movieRepository = movieRepository;
    }

    public Booking saveBooking(BookingRegisterDto bookingRegisterDto) {
        Booking booking=new Booking();
        booking.setBookedDate(bookingRegisterDto.getBookedDate());
        booking.setTime(bookingRegisterDto.getTime());
        booking.setMovieId(bookingRegisterDto.getMovieId());
        booking.setPrice(bookingRegisterDto.getPrice());
        booking.setSeatNumber(bookingRegisterDto.getSeatNumber());
        return bookingRepository.save(booking);
    }
}
