import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        isAdmin: false,
    });
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email format";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!validate()) return;
    //     setApiError(null);

    //     try {
    //         const response = await fetch("http://localhost:8080/users/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 email: formData.email,
    //                 password: formData.password,
    //             }),
    //         });

    //         const data = await response.json();

    //         if (!response.ok || data.message !== "Login Successful" || !data.userId) {
    //             throw new Error(data.message || "Login failed!");
    //         }

    //         localStorage.setItem("user", JSON.stringify({
    //             userId: data.userId,
    //             firstName: data.firstName,
    //             lastName: data.lastName,
    //         }));

    //         alert(data.message);
    //         navigate(formData.isAdmin ? "/admin-dashboard" : "/home");
    //     } catch (err) {
    //         setApiError(err.message);
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setApiError(null);
    
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));
    
            if (!storedUser) {
                throw new Error("No registered user found. Please register first.");
            }
    
            if (
                formData.email === storedUser.email &&
                formData.password === storedUser.password
            ) {
                alert("Login Successful");
    
                // Save logged-in user session (optional)
                localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
    
                // Navigate based on role
                navigate(formData.isAdmin ? "/admin-dashboard" : "/home");
            } else {
                throw new Error("Incorrect email or password");
            }
        } catch (err) {
            setApiError(err.message);
        }
    };
    
    return (
        <div className="login-container">
            <div className="login-box shadow-red-border">
                <div className="login-image">
                    <img src="./images/DeWatermark.ai_1741230733739.png" alt="Login" />
                </div>
                <div className="login-form">
                    <h2>Log In</h2>
                    {apiError && <p className="error">{apiError}</p>}
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" className="spaced-input" placeholder="Email" onChange={handleChange} required />
                        {errors.email && <p className="error">{errors.email}</p>}
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                        {errors.password && <p className="error">{errors.password}</p>}
                        <div className="admin-checkbox">
                            <input type="checkbox" name="isAdmin" onChange={handleChange} />
                            <label>Log in as Admin</label>
                        </div>
                        <button type="submit">Log in</button>
                    </form>
                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
