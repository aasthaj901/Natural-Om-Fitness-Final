import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import client1 from "../assets/img/client1.png";
import client2 from "../assets/img/client2.jpg";
import client3 from "../assets/img/client3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Yash Shinde",
      feedback:
        "Natural Om Fitness transformed my life! The personal trainers are incredibly supportive, and the state-of-the-art equipment makes every workout enjoyable. Highly recommend it! My energy levels have skyrocketed, and I feel stronger every day. The customized workout plans made all the difference in my fitness journey.",
    },
    {
      name: "Manas Patil",
      feedback:
        "The group fitness classes are fantastic! I've met amazing people, and the workouts are always fun and challenging. The energy here is unmatched! I successfully transformed my body to my goal weight, thanks to the well-structured training and diet guidance. This place gave me the motivation and discipline I needed to stay fit for life.",
    },
    {
      name: "Rohan Sharma",
      feedback:
        "The yoga classes have been a game-changer for me. Om is very skilled and creates a peaceful environment. I feel more relaxed and focused than ever! My flexibility and posture have improved drastically, and I no longer suffer from back pain. These sessions have become the best part of my daily routine.",
    },
  ];

  const transformationImages = [client1, client2, client3];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % transformationImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + transformationImages.length) % transformationImages.length);
  };

  return (
    <div className="testimonials-container mt-5">
      <h1 className="text-center mb-5 move-up">Client Testimonials</h1>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-info">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Transformation Section */}
      <div className="transformation-section">
        <h1>Transformation</h1>
        <div className="transformation-content">
          {/* Text Section */}
          <div className="transformation-text-box">
            <div className="transformation-card">
              <p>
                Transforming your body and mind is more than just an aesthetic goal—it’s about embracing a
                healthier, more fulfilling lifestyle. Under Omkar’s expert guidance, individuals of all
                fitness levels have unlocked their true potential, achieving remarkable physical and mental
                transformations.
              </p>
              <p>
                His approach is holistic, focusing not just on intense workouts, but also on
                sustainable habits, mindful eating, and mental resilience. Whether you’re looking to lose weight,
                gain muscle, improve endurance, or enhance overall well-being, Omkar tailors personalized programs
                to suit your unique goals.
              </p> 
              <p>
                Witness his own transformation on the right to see the true extent of his determination and skill. 
              </p>
            </div>
          </div>
          {/* Carousel Section */}
          <div className="transformation-carousel">
            <button className="carousel-btn prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <img src={transformationImages[currentImage]} alt="Transformation" className="carousel-image" />
            <button className="carousel-btn next" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
