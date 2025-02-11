import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  // Scroll to top when navigating to home
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Aeriel :wght@400;600&display=swap');

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes blink {
            50% { border-color: transparent; }
          }

          .animate-text {
            opacity: 0;
            animation: fadeIn 0.8s ease forwards;
            font-family: 'Playfair Display', sans-serif;
          }

          .animate-text:nth-child(1) { animation-delay: 0.3s; }
          .animate-text:nth-child(2) { animation-delay: 0.6s; }
          .animate-text:nth-child(3) { animation-delay: 0.9s; }
          .animate-text:nth-child(4) { animation-delay: 1.2s; }

          .float-icon {
            animation: float 2s ease-in-out infinite;
          }

          .typewriter {
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid #fff;
            width: 0;
            animation: 
              typewriter 2s steps(20) 1.5s forwards,
              blink 0.5s step-end infinite alternate;
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.15em;
          }

          .instagram-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            margin-top: 2rem;
          }

           .bubble-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  
}

.bubble { 
  margin-right: 20px;
  width: 160px;  /* Increased size */
  height: 160px;
  margin-top: 20px;
  background-color: rgba(40, 167, 69, 0.3); /* Translucent green */
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 50%;
  border: 3px solid #dfff00; /* Neon greenish-yellow border */
  box-shadow: 0 0 10px #dfff00; /* Neon glow effect */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.bubble:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #dfff00, 0 0 30px #dfff00; /* Brighter glow on hover */
}
          

          .bubble:nth-child(1) { animation-delay: 0s; }
          .bubble:nth-child(2) { animation-delay: 0.5s; }
          .bubble:nth-child(3) { animation-delay: 1s; }
        `}
      </style>

      <div className="home-container relative">
        <h1 className="animate-text">Welcome to Natural Om Fitness</h1>
        <h2 className="animate-text">
          Unlock Your Potential: Natural Fitness with Expert Training
        </h2>

        <p className="animate-text">
          Are you ready to elevate your fitness journey? Join our expert personal
          trainer as they share unique strategies and techniques for achieving
          natural fitness goals without the use of harsh supplements. Learn the
          importance of balanced nutrition, functional exercises, and mental
          wellness in a holistic approach to fitness. Tune in to discover tips
          tailored for all skill levels, and don't forget to comment your favorite
          exercise!
        </p>

        <div className="btn-container animate-text">
          <button
            className="btn-custom"
            onClick={() => scrollToSection("membership-section")}
          >
            Get Membership
          </button>
        </div>

        {/* Bubbles Highlighting Natural Fitness */}
        <div className="bubble-container">
          <div className="bubble">No Steroids</div>
          <div className="bubble">No Medicines</div>
          <div className="bubble">No Chemicals</div>
        </div>

        {/* Instagram Footer */}
        <div className="instagram-container animate-text">
          <a
            href="https://www.instagram.com/natural_om_fitness?igsh=MXNucWU0enRzMjhxbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="float-icon"
          >
        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <span className="text-white typewriter">Check us out on Instagram</span>
        </div>
      </div>
    </>

  );
};

export default Home;
