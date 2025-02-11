import React from "react";
// \import './Services.css'; // Assuming you'll create this CSS file

// Import images for each service
//import GroupFitnessImg from '../assets/img/group_fitness.jpeg';
//import YogaImg from '../assets/img/yoga-class.jpg';
import SpinningImg from '../assets/img/spinning.jpeg';
//import NutritionCounselingImg from '../assets/img/nutrition_counselling.jpeg';
import EquipmentImg from '../assets/img/equipment.jpeg';
import TrainingVideo from '../assets/training.mp4';
import groupVideo from '../assets/group.mp4';
import yogaVideo from '../assets/yoga.mp4';
import dietVideo from '../assets/img/diet.mp4';
// Directly import video

const Services = () => {
  const services = [
    {
      title: "Personal Training",
      video: TrainingVideo, // Use imported video
      description:
        "Work one-on-one with our certified trainers to achieve your fitness goals. Whether you want to lose weight, build muscle, or improve endurance, we've got you covered. Our trainers create personalized workout plans to suit your needs and track your progress to ensure consistent improvement.",
    },
    {
      title: "Group Fitness Classes",
      video: groupVideo,
      description:
        "Join our exciting group classes like Zumba, yoga, and HIIT workouts. Stay motivated while working out in a fun, energetic group environment. Connect with like-minded individuals, challenge yourself, and enjoy the social benefits of group fitness.",
    },
    {
      title: "Yoga",
      video: yogaVideo,
      description:
        "Our yoga classes offer a blend of physical postures, breathing techniques, and meditation practices to improve flexibility, strength, and mental clarity. Whether you're a beginner or experienced at yoga, our skilled instructors will guide you through each session for a balanced and peaceful mind-body connection.",
    },
    {
      title: "Spinning",
      image: SpinningImg,
      description:
        "Get your heart pumping with our dynamic spinning classes! Whether you're looking to build endurance, burn calories, or boost cardiovascular health, our high-energy cycling sessions are designed to challenge and motivate you. Join a class today and feel the intensity of a fun, calorie-torching workout.",
    },
    {
      title: "Nutrition Counseling",
     video: dietVideo,
      description:
        "Our expert nutritionists will guide you to adopt a healthy diet plan tailored to your specific needs. We'll help you balance macronutrients, achieve your fitness goals, and provide strategies for long-term sustainable health and fitness.",
    },
    {
      title: "State-of-the-Art Equipment",
      image: EquipmentImg,
      description:
        "Experience the latest fitness technology with our state-of-the-art equipment. Designed to provide you with an efficient and safe workout, our equipment covers strength training, cardio, and flexibility exercises for all fitness levels.",
    },
  ];

  return (
    <div className="services-container mt-5">
      <h1 className="text-center mb-5 move-up">Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div
            className={`service-card ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={index}
          >
            {service.video ? (
              <video 
                controls 
                className="service-video" 
                src={service.video}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            )}
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;