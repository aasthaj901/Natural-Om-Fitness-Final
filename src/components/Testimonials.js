import React from "react";

// Import images for testimonials (optional)
import Client1Img from '../assets/img/client1.png';
import Client2Img from '../assets/img/client2.jpg';
import Client3Img from '../assets/img/client3.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Yash Shinde",
      image: Client1Img,
      feedback:
        "Natural Om Fitness transformed my life! The personal trainers are incredibly supportive, and the state-of-the-art equipment makes every workout enjoyable. Highly recommend it! My energy levels have skyrocketed, and I feel stronger every day. The customized workout plans made all the difference in my fitness journey.",
    },
    {
      name: "Manas Patil",
      image: Client2Img,
      feedback:
        "The group fitness classes are fantastic! I've met amazing people, and the workouts are always fun and challenging. The energy here is unmatched! I successfully transformed my body from 86.2 kg to 73 kg, thanks to the well-structured training and diet guidance. This place gave me the motivation and discipline I needed to stay fit for life.",
    },
    {
      name: "Rohan Sharma",
      image: Client3Img,
      feedback:
        "The yoga classes have been a game-changer for me. Om is very skilled and creates a peaceful environment. I feel more relaxed and focused than ever! My flexibility and posture have improved drastically, and I no longer suffer from back pain. These sessions have become the best part of my daily routine.",
    },
  ];

  return (
    <div className="testimonials-container mt-5">
      <h1 className="text-center mb-5 move-up">Client Testimonials</h1>

      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-info">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
