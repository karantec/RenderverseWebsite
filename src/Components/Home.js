import OurCreations from "./Creation";
import FrequentAction from "./FrequentAction";
import LogoSwiper from "./LogoSwiper";
import AutoSwiperCarousel from "./Service";

import TechShowcase from "./TechShowcase";
import AnimatedTestimonials from "./Testimonial";
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
      <AutoSwiperCarousel />
      <CTASection />
      <AnimatedTestimonials />
      <FrequentAction />
    </div>
  );
};

export default Home;
