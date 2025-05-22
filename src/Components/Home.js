import FrequentAction from "./FrequentAction";
import LogoSwiper from "./LogoSwiper";
import TechShowcase from "./TechShowcase";

import CTASection from "./WhyChoose";

const Home = () => {
  return (
    <div>
      {/* <RenderverseSection />

      <TestimonialCard /> */}
      <TechShowcase />
      <LogoSwiper />
      <CTASection />
      <FrequentAction />
    </div>
  );
};

export default Home;
