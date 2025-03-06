import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Check if response is successful and contains the correct message
      if (!response.ok || data.message !== "Login Successful" || !data.userId) {
        throw new Error(data.message || "Login failed!");
      }

      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify({
        userId: data.userId,
        firstName: data.firstName,
        lastName: data.lastName
      }));

      alert(data.message); // Show success message
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <img
        src="./images/logo.jpeg"
        alt="Easy Cinema Logo"
        className="logo"
        onClick={() => navigate("/register")}
      />
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
