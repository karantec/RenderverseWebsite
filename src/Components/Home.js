import OurCreations from "./Creation";
import FrequentAction from "./FrequentAction";
import LogoSwiper from "./LogoSwiper";
import TechShowcase from "./TechShowcase";
import TestimonialSection from "./Testimonial";

import CTASection from "./WhyChoose";

const Home = () => {
  return (
    <div>
      {/* <RenderverseSection />

      <TestimonialCard /> */}
      <TechShowcase />
      <LogoSwiper />
      <OurCreations />
      <CTASection />
      <TestimonialSection />
      <FrequentAction />
    </div>
  );
};

export default Home;
