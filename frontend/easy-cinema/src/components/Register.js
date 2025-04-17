import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         setApiError(null);
    //         try {
    //             const response = await fetch("http://localhost:8080/users/register", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     firstName: formData.firstName,
    //                     lastName: formData.lastName,
    //                     email: formData.email,
    //                     password: formData.password,
    //                 }),
    //             });
    //             if (!response.ok) {
    //                 throw new Error("Failed to register. Please try again.");
    //             }
    //             alert("Registered successfully!");
    //             navigate("/login");
    //         } catch (error) {
    //             setApiError(error.message);
    //         }
    //     }
    // };
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
    
                //const userData = await response.json(); // Parse response data
    
                // ✅ Save user data to localStorage
                localStorage.setItem("user", JSON.stringify({
                    id: formData.id,
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    password: formData.password, // if applicable
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
};

export default Register;