import React from "react";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";  
import FrequentAction from "./Components/FrequentAction";
import Navbar from "./Components/Navbar";
import RenderverseSection from "./Components/HeroSection";
import WhyChooseUs from "./Components/WhyChoose";
import Testimonials from "./Components/Testimonial";

const App = () => {
  return (
    <div className="relative min-h-screen">
      
      <Navbar />
      <RenderverseSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <FrequentAction />
      <ContactForm />
      <Footer />
  
    </div>
  );
};

export default App;
