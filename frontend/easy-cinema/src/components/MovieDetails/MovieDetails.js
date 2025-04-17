import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SimilarMovies from "./SimilarMovies";
import "../../styles.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="movie-details-container">
      {/* Trailer Section */}
      <div className="trailer-section">
        <h2>{movie.title}</h2>
        <iframe width="100%" height="400" src={movie.trailerUrl} title={movie.title} frameBorder="0" allowFullScreen></iframe>
      </div>

      {/* Movie Information Section */}
      <div className="movie-info">
        <div className="movie-poster">
          {/* Tempororily setting the same image */}
          <img src="/images/aagadu.jpg" alt={movie.title} />
        </div>
        <div className="movie-meta">
          <h1>{movie.title}</h1>
          <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
          <p><strong>Duration:</strong> ⏳ {movie.duration}</p>
          <button className="book-ticket-btn">
            <Link to={`/booking/${id}`}>Book Ticket</Link>
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <div className="details">
          <h3>Details</h3>
          <p>{movie.details}</p>
        </div>
        <div className="cast">
          <h3>Cast</h3>
          <p>{movie.cast}</p>
        </div>
      </div>

      {/* Storyline Section */}
      <div className="storyline">
        <h3>Storyline</h3>
        <p>{movie.storyline}</p>
      </div>

      {/* Similar Movies */}
      <SimilarMovies movieId={id} />
    </div>
  );
};

export default MovieDetails;
