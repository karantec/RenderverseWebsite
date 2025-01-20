import React from "react";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import FrequentAction from "./Components/FrequentAction";
import Navbar from "./Components/Navbar";
import VantaBackground from "./Components/VantaBackground"; 

const App = () => {
  return (
    <div className="relative min-h-screen">
      <VantaBackground /> {/* Adds animated background */}
      <Navbar />
      <FrequentAction />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
