import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
<<<<<<< HEAD
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Cart from "./components/Cart";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import AdminPage from "./components/AdminPage";
import Footer from "./components/Footer"; // ✅ Import the Footer component

const App = () => {
    const [users, setUsers] = useState([]);

    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/register" />} />
                    <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
                    <Route path="/login" element={<Login users={users} />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/movielist" element={<MovieList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                    <Route path="/booking/:id" element={<Booking />} /> {/* ✅ Corrected Route */}
                    <Route path="/admin-dashboard" element={<AdminPage />} />
                </Routes>
            </div>
            <Footer /> {/* ✅ Add Footer here */}
        </Router>
    );
=======
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
>>>>>>> 064ebe3bb508b2a8f4c69827e8f75816fd46d439
};

export default App;
