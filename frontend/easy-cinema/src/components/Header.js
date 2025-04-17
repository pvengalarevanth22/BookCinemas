import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        // ✅ Fetch user from localStorage on component mount
        return JSON.parse(localStorage.getItem("user")) || null;
    });
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkSession = () => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser || null);
        };

        // ✅ Listen for localStorage updates (e.g., in another tab)
        window.addEventListener("storage", checkSession);
        return () => window.removeEventListener("storage", checkSession);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("menu-open", menuOpen);
    }, [menuOpen]);

    const handleLogout = () => {
        localStorage.removeItem("user");  // Remove user from localStorage
        setUser(null);
        setMenuOpen(false);
        navigate("/login");
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="logo">
                <Link to="/" onClick={closeMenu}>
                    <img src="/images/easy_ticket-white.png" alt="Easy Ticket" />
                </Link>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span />
                <span />
                <span />
            </div>

            <div className={`nav-container ${menuOpen ? "open" : ""}`}>
                <nav className="nav">
                    <Link to="/" onClick={closeMenu}>
                        Easy Ticket
                    </Link>
                    <Link to="/Home" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/MovieList" onClick={closeMenu}>
                        Movies
                    </Link>
                    <Link to="/contact" onClick={closeMenu}>
                        Contact
                    </Link>

                    {user ? (
                        <>
                            <span className="welcome-text">
                                Welcome, {user.firstName} {user.lastName}!
                            </span>
                            <button className="btn-danger" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={closeMenu}>
                                <button className="btn-primary">Login</button>
                            </Link>
                            <Link to="/register" onClick={closeMenu}>
                                <button className="btn-secondary">Sign Up</button>
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
