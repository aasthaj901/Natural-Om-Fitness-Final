import React from "react";
import BasicMembershipImg from '../assets/img/basic.png';
import PremiumMembershipImg from '../assets/img/premium.png';
import FamilyMembershipImg from '../assets/img/family.png';

const Membership = () => {

  const memberships = [
    {
      title: "Basic Membership",
      image: BasicMembershipImg,
      description:
        "Gain access to our state-of-the-art gym equipment and locker rooms. Perfect for individuals starting their fitness journey. Enjoy a variety of cardio and strength training equipment. Our basic membership allows you to visit during regular hours and get started on your fitness goals. Whether you’re looking to tone your body or stay fit, this is the ideal plan for beginners.",
    },
    {
      title: "Premium Membership",
      image: PremiumMembershipImg,
      description:
        "Enjoy all basic membership benefits along with unlimited group fitness classes, personal training discounts, and priority booking. The premium membership gives you exclusive access to special classes and events. Receive personalized fitness advice from our experts and enjoy extended gym hours. Take advantage of premium locker rooms and a more personalized fitness experience.",
    },
    {
      title: "Family Membership",
      image: FamilyMembershipImg,
      description:
        "Bring the whole family! Includes access for up to 4 family members, group discounts, and child-friendly classes. Enjoy family fitness activities and family-friendly events. Each family member can enjoy personalized workout plans and free fitness assessments. The family membership ensures that everyone, from kids to adults, can stay healthy together.",
    },
  ];

  return (
    <div id="membership-section" className="membership-container">
      <h1 className="text-center mb-5 move-up">Membership Options</h1>
      <div className="membership-list">
        {memberships.map((membership, index) => (
          <div
            className={`membership-card ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            key={index}
          >
            <img src={membership.image} alt={membership.title} className="membership-image" />
            <div className="membership-info">
              <h2>{membership.title}</h2>
              <p>{membership.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="apply-button-container text-center mt-4">
        <a href="#contactus-section">
          <button className="btn btn-custom">
            Contact us to Apply for Membership
          </button>
        </a>
      </div>
    </div>
  );
};

export default Membership;
