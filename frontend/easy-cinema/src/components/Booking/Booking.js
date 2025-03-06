import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SeatSelection from "./SeatSelection";
import "./styles.css";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtime, setShowtime] = useState("");
  const [date, setDate] = useState("");
  const seatPrice = { normal: 10, deluxe: 15, ultra: 20 };

  useEffect(() => {
    axios.get(`http://localhost:8080/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [id]);

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat) ? prevSeats.filter((s) => s !== seat) : [...prevSeats, seat]
    );
  };

  const handleBooking = () => {
    if (!date || !showtime || selectedSeats.length === 0) {
      alert("Please select date, time, and at least one seat!");
      return;
    }

    axios.post("http://localhost:8080/bookings", {
      movieId: id,
      seats: selectedSeats,
      date,
      time: showtime,
      price: selectedSeats.length * seatPrice.normal,
    })
    .then(() => {
      alert("Booking Successful!");
      navigate("/cart");
    })
    .catch((err) => alert("Booking Failed!"));
  };

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="booking-container">
      <div className="movie-info">
        {/* <img src={movie.imageUrl} alt={movie.title} /> */}
        <img src="/images/aagadu.jpg" alt={movie.title} />
        <div>
          <h1>{movie.title}</h1>
          <button className="watch-trailer">Watch Trailer</button>
        </div>
      </div>

      <div className="date-time-selection">
        <h3>Select Date & Time</h3>
        <div className="date-picker">
          <button onClick={() => setDate("Feb 1")}>Feb 1</button>
          <button onClick={() => setDate("Feb 2")}>Feb 2</button>
          <button onClick={() => setDate("Feb 3")}>Feb 3</button>
        </div>
        <div className="time-picker">
          <button onClick={() => setShowtime("9:30 AM")}>9:30 AM</button>
          <button onClick={() => setShowtime("1:30 PM")}>1:30 PM</button>
          <button onClick={() => setShowtime("5:30 PM")}>5:30 PM</button>
        </div>
      </div>

      <SeatSelection selectedSeats={selectedSeats} handleSeatSelection={handleSeatSelection} />

      <div className="summary">
        <h3>Selected Seats: {selectedSeats.join(", ") || "None"}</h3>
        <p>Total Price: ${selectedSeats.length * seatPrice.normal}</p>
        <button className="purchase-btn" onClick={handleBooking}>Purchase</button>
      </div>
    </div>
  );
};

export default Booking;
