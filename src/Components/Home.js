import ContactForm from "./ContactForm";
import Footer from "./Footer";
import FrequentAction from "./FrequentAction";
import RenderverseSection from "./HeroSection";
import Navbar from "./Navbar";

import TestimonialCard from "./Testimonial";
import WhyChooseUs from "./WhyChoose";

const Home = () => {
  return (
    <div>
      
      <RenderverseSection />
      <WhyChooseUs />
      <TestimonialCard />
     
      <FrequentAction />
      <ContactForm />
      
    </div>
  );
};

export default Home;
