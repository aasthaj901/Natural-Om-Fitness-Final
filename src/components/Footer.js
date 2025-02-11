import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Title */}
        <p className="footer-title">Get in Touch</p>

        <div className="footer-item">
  <FaEnvelope /> {/* Email Icon */}
  <span style={{ marginLeft: "20px" }}>
    Email:{" "}
    <a href="mailto:naturalomfitness@gmail.com" className="footer-link">
    naturalomfitness@gmail.com
    </a>
  </span>
</div>

{/* Phone */}
<div className="footer-item">
  <FaPhone /> {/* Phone Icon */}
  <span style={{ marginLeft: "20px" }}>Phone: +91 8767243539</span>
  <span style={{ marginLeft: "20px" }}>Phone: +91 7263012995</span>
</div>


        {/* Copyright */}
        <p className="footer-line">
          &copy; {new Date().getFullYear()} Gym Fitness. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
