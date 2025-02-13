import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styles.css";

const Login = ({ users }) => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => (u.username === formData.identifier || u.email === formData.identifier) && u.password === formData.password
    );

    if (user) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <img src="./images/logo.jpeg" alt="Easy Cinema Logo" className="logo" onClick={() => navigate("/register")} />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="identifier" placeholder="Username or Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
