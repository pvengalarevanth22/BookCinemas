import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Booking from "./components/Booking/Booking";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in (by checking user details in localStorage)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.userId) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} setAuth={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        
        {/* If already authenticated, redirect to Home */}
        <Route 
          path="/register" 
          element={!isAuthenticated ? <Register setAuth={setIsAuthenticated} /> : <Navigate to="/" />} 
        />
        
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login setAuth={setIsAuthenticated} /> : <Navigate to="/" />} 
        />
        
        {/* Redirect for any unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
