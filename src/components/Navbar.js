import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={require("../assets/img/dumbell.png")}
            alt="Dumbbell Icon"
            className="dumbbell-icon"
          />
          <span className="title">Natural Om Fitness</span>
        </a>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/membership" onClick={() => setMenuOpen(false)}>
              Membership
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
