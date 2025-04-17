import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD:frontend/easy-cinema/src/components/Register.js
import "../styles/register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
=======
import "../../styles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();
>>>>>>> 064ebe3bb508b2a8f4c69827e8f75816fd46d439:frontend/easy-cinema/src/components/Auth/Register.js

    // Validate form inputs
    const validate = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email format";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

<<<<<<< HEAD:frontend/easy-cinema/src/components/Register.js
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setApiError(null);
            try {
                const response = await fetch("http://localhost:8080/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        password: formData.password,
                    }),
                });
    
                if (!response.ok) {
                    throw new Error("Failed to register. Please try again.");
                }
    
                const userData = await response.json(); // Backend response
    
                // ✅ Save user data including password to localStorage
                localStorage.setItem("user", JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password, // stored password
                    ...userData // include any additional response fields (e.g. token or userId)
                }));
    
                alert("Registered successfully!");
                navigate("/login");
            } catch (error) {
                setApiError(error.message);
            }
        }
    };
    

    return (
        <div className="register-container">
            <div className="register-box">
                <div className="register-image">
                    <img src="./images/wmremove-transformed.jpeg" alt="Sign Up" />
                </div>
                <div className="register-form">
                    <h2>Sign Up</h2>
                    {apiError && <p className="error">{apiError}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName} // Ensure the input value is connected to state
                                onChange={handleChange}
                                required
                            />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName} // Ensure the input value is connected to state
                                onChange={handleChange}
                                required
                            />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="spaced-input"
                            value={formData.email} // Ensure the input value is connected to state
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="spaced-input"
                            value={formData.password} // Ensure the input value is connected to state
                            onChange={handleChange}
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Retype Password"
                            className="spaced-input"
                            value={formData.confirmPassword} // Ensure the input value is connected to state
                            onChange={handleChange}
                            required
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>or</p>
                    <button className="google-signin">Sign in with Google</button>
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
=======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <img src="./images/logo.jpeg" alt="Easy Cinema Logo" className="logo" onClick={() => navigate("/register")} />
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="text" name="userName" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
>>>>>>> 064ebe3bb508b2a8f4c69827e8f75816fd46d439:frontend/easy-cinema/src/components/Auth/Register.js
};

export default Register;