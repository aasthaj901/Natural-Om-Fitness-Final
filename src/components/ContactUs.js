import React, { useState } from "react";
import emailjs from "emailjs-com";
import NaturalLogo from "../assets/img/natural.png";
import InstructorImg from "../assets/img/instructor.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wblc9pb", // Replace with your EmailJS service ID
        "template_ku2wuoj", // Replace with your EmailJS template ID
        formData,
        "O0p_jaFbqa-WjndPb" // Replace with your EmailJS user ID (from the EmailJS dashboard)
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!");
          setFormData({ name: "", phone: "", email: "", question: "" }); // Reset form
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contactus-section" className="contactus-container">
      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="contactus-card d-flex flex-column flex-md-row align-items-center p-4 bg-light rounded shadow">
        <div className="form-container w-100 w-md-50 d-flex flex-column align-items-start">
          <img
            src={NaturalLogo}
            alt="Gym Logo"
            className="img-fluid mb-4"
            style={{ width: "600px", height: "auto" }}
          />

          <div className="cta-form">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! Please fill out the form below to reach out to us.</p>
          </div>

          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form__label text-uppercase">Your Name</label>
              <input
                type="text"
                id="name"
                className="form__input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="phone" className="form__label text-uppercase">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form__input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email" className="form__label text-uppercase">Email Address</label>
              <input
                type="email"
                id="email"
                className="form__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="question" className="form__label text-uppercase">Your Question</label>
              <textarea
                id="question"
                className="form__input"
                rows="4"
                value={formData.question}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        <div className="d-none d-md-block w-md-50 ml-md-4 mt-4 mt-md-0">
          <img
            src={InstructorImg}
            alt="Instructor"
            className="img-fluid rounded-circle"
            style={{ width: "300px", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;




