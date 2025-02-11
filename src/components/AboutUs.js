import React, { useState } from "react";
import Om1 from "../assets/img/om1.jpg";
import Om2 from "../assets/img/om2.jpg";
import Om3 from "../assets/img/om3.jpg";
import Om4 from "../assets/img/om4.jpg";
import Om5 from "../assets/img/om5.jpg";
import Om6 from "../assets/img/om6.jpg";
import Om7 from "../assets/img/om7.jpg";
import InstructorImg from "../assets/img/instructor.jpg";

const AboutUs = () => {
  const images = [InstructorImg, Om1, Om2, Om3, Om4, Om5, Om6, Om7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesToShow >= images.length
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0
        ? images.length - imagesToShow
        : prevIndex - 1
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 about-title">About Us</h1>

      <div className="aboutus-card d-flex flex-column align-items-center p-4 bg-light rounded shadow">
        <h1 className="mb-4 text-primary">Meet Our Head Instructor</h1>

        {/* Carousel */}
        <div className="carousel-container">
          <div className="carousel">
            {images
              .slice(currentIndex, currentIndex + imagesToShow)
              .map((img, index) => (
                <div className="carousel-item" key={index}>
                  <img
                    src={img}
                    className="d-block w-100 rounded"
                    alt={`Instructor ${index + 1}`}
                  />
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            onClick={handlePrev}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <button
            className="carousel-control-next"
            onClick={handleNext}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>

        {/* About Us Information */}
        <div className="aboutus-info text-center mt-4">
          <h3 className="text-dark font-weight-bold">Omkar Koli</h3>
          <p>
            Om is a highly qualified fitness expert with over a decade of
            experience in transforming lives through fitness. He specializes in
            strength training, yoga, and personalized nutrition plans, helping
            individuals achieve their health goals.
          
            His sessions are tailored to each individual’s needs, from beginners
            looking to get started to seasoned athletes aiming to refine their
            skills. Om’s dedication, motivational methods, and expertise create
            a supportive environment for all.
          </p>
        </div>

        {/* Certifications Section */}
        <h1 className="mt-5 mb-4 text-center">Certifications & Registrations</h1>
        <ul className="certifications-list p-3">
          <li>
            <strong>K11 Diploma in Personal Training Certificate</strong>
            (REPS Category A - Personal Trainer)
            <br />
            Certificate from Accrediting Body - PD: Approval, UK
          </li>
          <li>
            <strong>NSQF Level - 4 (Fitness Trainer)  </strong>
            Certificate from SPEFL-SC
          </li>
          <li>
            <strong>Trauma Response Certificate  </strong>
            from Australian Lifesaving Academy
          </li>
          <li>
            <strong>Full Membership with REPS India   </strong>
            under Category A (Personal Trainer)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
