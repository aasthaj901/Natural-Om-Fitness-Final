import React, { useEffect, useState } from "react";
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

  const [hoveredBubble, setHoveredBubble] = useState(null);

  const bubbles = [
    {
      defaultText: "100% Natural:No Steroids",
      hoverText: "Our approach is completely natural with no artificial enhancers."
    },
    {
      defaultText: "No Medicines for Transformation",
      hoverText: "Achieve your transformation through dedication and hard work."
    },
    {
      defaultText: "No Chemicals, Just Hard Work",
      hoverText: "No chemicals, just consistent effort and discipline."
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Aeriel:wght@400;600&display=swap');
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
            gap: 39px;
          }

          .bubble { 
            width: 180px;
            height: 180px;
            background-color: rgba(40, 167, 69, 0.3);
            color: white;
            font-size: 18px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 15px;
            line-height: 1.3;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 10px white;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .bubble:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px white;
          }

          .bubble-text {
            font-size: 16px;
            font-weight: bold;
            color: white;
          }
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
          {bubbles.map((bubble, index) => (
            <div
              key={index}
              className="bubble"
              onMouseEnter={() => setHoveredBubble(index)}
              onMouseLeave={() => setHoveredBubble(null)}
            >
              <span className="bubble-text">
                {hoveredBubble === index ? bubble.hoverText : bubble.defaultText}
              </span>
            </div>
          ))}
        </div> 
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
