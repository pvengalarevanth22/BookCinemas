package com.easyticket.easyticket.Repository;

import com.easyticket.easyticket.Models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking,String> {
   Booking save(Booking booking);
}
