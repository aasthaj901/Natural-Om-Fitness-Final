import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import { useEffect } from "react";
import { Helmet } from 'react-helmet';



import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";  // Correct import for AboutUs
import ContactUs from "./components/ContactUs";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";
import './App.css';
import Footer from "./components/Footer";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
       <ScrollToTop />

      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/membership" element={<Membership />} />
        
      </Routes>  
      <Helmet>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Helmet>
      <Services />
      <Membership />
      <Testimonials />
      <AboutUs />
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
