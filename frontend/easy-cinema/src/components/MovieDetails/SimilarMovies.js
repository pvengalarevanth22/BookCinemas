import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles.css";

const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/movies/similar/${movieId}`)
      .then((res) => setSimilarMovies(res.data))
      .catch((err) => console.error("Error fetching similar movies:", err));
  }, [movieId]);

  return (
    <div className="similar-movies-section">
      <h3>Similar Movies</h3>
      <div className="similar-movies-grid">
        {similarMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <h4>{movie.title}</h4>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
