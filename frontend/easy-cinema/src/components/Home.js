import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const featuredMovies = [
  { title: "The Recruit", image: "./images/The Recruit.jpg", duration: "2h 15m", rating: "⭐⭐⭐⭐" },
  { title: "Night Agent 2", image: "./images/NightAgent2.jpg", duration: "1h 50m", rating: "⭐⭐⭐⭐⭐" },
  { title: "How To Train Your Dragon 2", image: "./images/how to train your dragon.jpg", duration: "2h 30m", rating: "⭐⭐⭐⭐" },
];

const movies = [
  { title: "The Recruit", image: "./images/The Recruit.jpg", duration: "2h 15m", rating: "⭐⭐⭐⭐" },
  { title: "Night Agent 2", image: "./images/NightAgent2.jpg", duration: "1h 50m", rating: "⭐⭐⭐⭐⭐" },
  { title: "How To Train Your Dragon 2", image: "./images/how to train your dragon.jpg", duration: "2h 30m", rating: "⭐⭐⭐⭐" },
  { title: "Mission Impossible: Dead Reckoning", image: "./images/MissionImpossible.jpg", duration: "2h 30m", rating: "⭐⭐⭐⭐" },
  { title: "Avatar: The Way of Water", image: "./images/Avatar2.jpg", duration: "3h 12m", rating: "⭐⭐⭐⭐⭐" },
  { title: "Guardians of the Galaxy Vol. 3", image: "./images/Guardians3.jpg", duration: "2h 30m", rating: "⭐⭐⭐⭐" },
  { title: "John Wick: Chapter 4", image: "./images/JohnWick4.jpg", duration: "2h 49m", rating: "⭐⭐⭐⭐⭐" },
  { title: "Spider-Man: No Way Home", image: "./images/SpiderMan3.jpg", duration: "2h 28m", rating: "⭐⭐⭐⭐⭐" },
];
const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="./images/logo.jpeg" alt="Easy Cinema Logo" className="header-logo" />
          <span className="site-name">Easy Cinema</span>
        </div>
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><button>Logout</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Featured Movies */}
      <section className="hero-section">
        {featuredMovies.map((movie, index) => (
          <div className="featured-movie" key={index}>
            <img src={movie.image} alt={movie.title} className="featured-image" />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Experience the thrill and adventure of {movie.title} on the big screen.</p>
              <div className="movie-info">
                <span>Duration: {movie.duration}</span>
                <span>Rating: {movie.rating}</span>
              </div>
              <div className="movie-actions">
                <button>Watch Trailer</button>
                <button>Buy Ticket</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Movie List */}
      <section className="movie-list">
        <h2>Now Showing</h2>
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-thumbnail" />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Easy Cinema. All rights reserved.</p>
          <p className="address">123 Movie Street, Film City, CA 90210</p>
          <div className="social-icons">
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Home;
