import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative solutions exceeded all our expectations. The ROI we achieved was beyond our wildest dreams!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StartupLab",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The level of professionalism and expertise they brought to our project was outstanding. They delivered beyond what we thought was possible, transforming our vision into reality with incredible precision.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateCorp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From concept to execution, every step was handled with precision and care. The results speak for themselves - our ROI increased by 300% and customer satisfaction reached an all-time high.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO",
      company: "CloudSys",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Exceptional service and remarkable results. They understood our vision perfectly and brought it to life in ways we never imagined. The technical excellence was truly impressive.",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Founder",
      company: "GreenTech Solutions",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Their innovative approach and commitment to excellence made all the difference. Our partnership has been nothing short of transformational, revolutionizing how we operate.",
    },
    {
      id: 6,
      name: "James Mitchell",
      role: "Operations Lead",
      company: "ScaleUp Ventures",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The team's expertise and dedication are unmatched. They delivered a solution that not only met our needs but revolutionized our entire workflow and boosted productivity by 250%.",
    },
    {
      id: 7,
      name: "Amanda Foster",
      role: "Creative Director",
      company: "DesignHub",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Absolutely phenomenal work! Their creative vision combined with technical expertise created something truly magical. Every detail was perfect, exceeding our highest expectations.",
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "VP of Sales",
      company: "SalesForce Pro",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with them was a breath of fresh air. Their strategic approach and flawless execution helped us achieve results we never thought possible. Truly exceptional!",
    },
  ];

  // Responsive slidesToShow calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(3); // Desktop
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxSlide = Math.max(0, testimonials.length - slidesToShow);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlide]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-all duration-300 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400 animate-pulse"
            : "text-gray-300"
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    ));
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden relative min-h-screen">
      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-5 -left-5 sm:-top-10 sm:-left-10 w-36 h-36 sm:w-72 sm:h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-bounce"></div>
        <div
          className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:-right-10 w-36 h-36 sm:w-72 sm:h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        {/* Responsive Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block animate-bounce mb-2 sm:mb-4">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-blue-400 mx-auto" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-6 animate-fade-in-up leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p
            className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up px-4"
            style={{ animationDelay: "0.2s" }}
          >
            Don't just take our word for it. Here's what our amazing clients
            have to say about their transformative experience.
          </p>
        </div>

        {/* Swiper Container - Enhanced Responsiveness */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on very small screens */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-20 bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-gray-300 hover:text-blue-400 p-2 lg:p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group border border-gray-600"
          >
            <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 group-hover:animate-pulse" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 lg:translate-x-4 z-20 bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-gray-300 hover:text-blue-400 p-2 lg:p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group border border-gray-600"
          >
            <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 group-hover:animate-pulse" />
          </button>

          {/* Testimonials Slider - Responsive margins */}
          <div className="overflow-hidden mx-2 sm:mx-4 lg:mx-8">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentSlide * 100) / slidesToShow
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 px-2 sm:px-3 lg:px-4 ${
                    slidesToShow === 1
                      ? "w-full"
                      : slidesToShow === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <div className="group bg-gray-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 lg:hover:-translate-y-4 hover:rotate-1 transition-all duration-500 border border-gray-700/50 hover:border-blue-400/50 relative overflow-hidden h-full">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating Particles - Responsive */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-ping"></div>
                    <div
                      className="absolute bottom-4 left-3 sm:bottom-8 sm:left-6 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Animated Stars - Responsive */}
                      <div className="flex items-center mb-3 sm:mb-4 lg:mb-6 space-x-0.5 sm:space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text - Responsive typography */}
                      <blockquote className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8 relative flex-grow">
                        <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 text-2xl sm:text-3xl lg:text-4xl text-blue-400/50 font-serif animate-pulse">
                          "
                        </div>
                        <p className="italic relative z-10 group-hover:text-gray-200 transition-colors duration-300 pt-2">
                          {testimonial.text}
                        </p>
                        <div
                          className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 text-2xl sm:text-3xl lg:text-4xl text-blue-400/50 font-serif animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        >
                          "
                        </div>
                      </blockquote>

                      {/* Client Info - Responsive sizing */}
                      <div className="flex items-center mt-auto">
                        <div className="relative">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-spin opacity-20"
                            style={{ animationDuration: "3s" }}
                          ></div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full object-cover border-2 sm:border-4 border-gray-600 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10"
                          />
                          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-1 sm:border-2 border-gray-800 animate-pulse"></div>
                        </div>
                        <div className="ml-2 sm:ml-3 lg:ml-4 min-w-0">
                          <h4 className="font-bold text-white text-sm sm:text-base lg:text-lg group-hover:text-blue-400 transition-colors duration-300 truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300 truncate">
                            {testimonial.role}
                          </p>
                          <p className="text-blue-400 text-xs sm:text-sm font-medium group-hover:text-purple-400 transition-colors duration-300 truncate">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Dots - Responsive sizing */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {Array.from({ length: maxSlide + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-400 scale-125 animate-pulse"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons - Only visible on small screens */}
        <div className="flex justify-center space-x-4 mt-6 sm:hidden">
          <button
            onClick={prevSlide}
            className="bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-gray-300 hover:text-blue-400 p-3 rounded-full shadow-lg transition-all duration-300 border border-gray-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-gray-300 hover:text-blue-400 p-3 rounded-full shadow-lg transition-all duration-300 border border-gray-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Enhanced Call to Action - Responsive spacing */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Ensure smooth scrolling on mobile */
        @media (max-width: 640px) {
          .overflow-hidden {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
