import ContactForm from "./Contact";
import OurCreations from "./Creation";
import FrequentAction from "./FrequentAction";
import LogoSwiper from "./LogoSwiper";
import ServiceCardsShowcase from "./Service";
import TechnologiesSection from "./TechShowcase";

import TechShowcase from "./TechShowcase";
import AnimatedTestimonials from "./Testimonial";

import CTASection from "./WhyChoose";

const Home = () => {
  return (
    <div>
      {/* <RenderverseSection />

      <TestimonialCard /> */}
      <TechnologiesSection />
      <LogoSwiper />
      <OurCreations />
      <ServiceCardsShowcase />
      <CTASection />
      <AnimatedTestimonials />
      <ContactForm />
      <FrequentAction />
    </div>
  );
};

export default Home;
