import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if user is logged in by retrieving from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.userId) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    setUser(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/images/easy_ticket-white.png" alt="Easy Ticket" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="nav">
        <Link to="/">Easy Ticket</Link>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/contact">Contact</Link>

        {/* Before Login: Show Login & Signup */}
        {!user ? (
          <>
            <Link to="/login">
              <button className="btn-primary">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn-secondary">Sign Up</button>
            </Link>
          </>
        ) : (
          <>
            {/* After Login: Show Welcome Message & Logout */}
            <span className="welcome-text">Welcome, {user.firstName}!</span>
            <button className="btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
