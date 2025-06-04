import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const AnimatedTestimonials = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 transition-all duration-300 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4000); // Changed to 4 seconds
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const handleManualNavigation = (callback) => {
    setAutoplay(false);
    callback();
    setTimeout(() => setAutoplay(true), 8000); // Resume autoplay after 8 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Quote className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients
            have to say about their transformative experience.
          </p>
        </div>

        {/* Main Testimonial Container */}
        <div className="relative grid grid-cols-1 gap-20 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Image Stack */}
          <div className="relative">
            <div className="relative h-96 w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.src}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out origin-bottom ${
                    isActive(index) ? "z-40" : "z-10"
                  }`}
                  style={{
                    opacity: isActive(index) ? 1 : 0.7,
                    transform: `
                      scale(${isActive(index) ? 1 : 0.95}) 
                      rotateY(${isActive(index) ? 0 : randomRotateY()}deg)
                      translateZ(${isActive(index) ? 0 : -100}px)
                      translateY(${isActive(index) ? 0 : 20}px)
                    `,
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                  }}
                >
                  <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="h-full w-full object-cover object-center"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-6">
              {/* Stars */}
              <div className="flex items-center space-x-1">
                {renderStars(testimonials[active].rating)}
              </div>

              {/* Quote */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-blue-400/30 font-serif">
                  "
                </div>
                <blockquote className="text-xl text-gray-300 leading-relaxed relative z-10">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className="inline-block animate-fade-in-word"
                      style={{
                        animationDelay: `${0.02 * index}s`,
                        animationFillMode: "both",
                      }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </blockquote>
                <div className="absolute -bottom-4 -right-4 text-6xl text-blue-400/30 font-serif">
                  "
                </div>
              </div>

              {/* Author Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-blue-400 font-medium">
                  {testimonials[active].designation}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-12">
              <div className="flex gap-4">
                <button
                  onClick={() => handleManualNavigation(handlePrev)}
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-gray-600"
                >
                  <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </button>
                <button
                  onClick={() => handleManualNavigation(handleNext)}
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-gray-600"
                >
                  <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>

              {/* Progress Indicators */}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden mt-16">
          <div className="text-center space-y-8">
            <div className="relative mx-auto w-64 h-64">
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6 px-4">
              <div className="flex justify-center space-x-1">
                {renderStars(testimonials[active].rating)}
              </div>

              <blockquote className="text-lg text-gray-300 leading-relaxed">
                "{testimonials[active].quote}"
              </blockquote>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-blue-400 font-medium">
                  {testimonials[active].designation}
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleManualNavigation(handlePrev)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-gray-600"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleManualNavigation(handleNext)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-gray-600"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Progress Indicators */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-word {
          from {
            filter: blur(10px);
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            filter: blur(0px);
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-word {
          animation: fade-in-word 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AnimatedTestimonials;
