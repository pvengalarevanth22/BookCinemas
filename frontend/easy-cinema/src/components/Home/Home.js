import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Filters from "./Filters";
import "../../styles.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from local database API
    axios.get("http://localhost:8080/movies")
      .then((res) => {
        setMovies(res.data);
        setFilteredMovies(res.data); // Default view: Show all movies
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  const filterMovies = (type) => {
    if (type === "all") {
      setFilteredMovies(movies);
    } else if (type === "date") {
      setFilteredMovies([...movies].sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)));
    } else if (type === "comingSoon") {
      setFilteredMovies(movies.filter((movie) => new Date(movie.releaseDate) > new Date()));
    }
  };

  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-image"></div>
        <div className="hero-details">
          <h1>Featured Movie</h1>
          <p>Explore the best movies playing now!</p>
          <button className="watch-trailer">Watch Trailer</button>
          <button className="buy-ticket">Buy Ticket</button>
        </div>
      </div>

      <Filters filterMovies={filterMovies} />

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found.</p>
        )}
      </div>

      <footer className="footer">© 2024 Movie Booking System</footer>
    </div>
  );
};

export default Home;
