import React, { useRef, useEffect, useState } from "react";

const LogoSwiper = () => {
  const swiperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const logos = [
    {
      id: 1,
      name: "Frame Digital Pvt Ltd",
      icon: "FD",
      bgColor: "bg-indigo-900",
    },
    {
      id: 2,
      name: "COS HM",
      text: "COS HM",
      subtitle: "CONSULTING",
      bgColor: "bg-indigo-900",
    },
    {
      id: 3,
      name: "HyperDigital",
      text: "HYPERDIGITAL",
      icon: "▲▲",
      bgColor: "bg-indigo-900",
    },
    {
      id: 4,
      name: "Tramonic Tech",
      text: "TRAMONIC TECH",
      icon: "◊",
      bgColor: "bg-indigo-900",
    },
    {
      id: 5,
      name: "COS HM",
      text: "COS HM",
      subtitle: "CONSULTING",
      bgColor: "bg-indigo-900",
    },
    {
      id: 6,
      name: "Frame Digital Pvt Ltd",
      icon: "FD",
      bgColor: "bg-indigo-900",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - swiperRef.current.offsetLeft);
    setScrollLeft(swiperRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - swiperRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    swiperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - swiperRef.current.offsetLeft);
    setScrollLeft(swiperRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - swiperRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    swiperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const swiper = swiperRef.current;

    // Auto-scroll functionality
    let autoScrollInterval;

    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (swiper && !isDragging) {
          const maxScroll = swiper.scrollWidth - swiper.clientWidth;
          if (swiper.scrollLeft >= maxScroll) {
            swiper.scrollLeft = 0;
          } else {
            swiper.scrollLeft += 2;
          }
        }
      }, 50);
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };

    startAutoScroll();

    // Stop auto-scroll on hover
    swiper.addEventListener("mouseenter", stopAutoScroll);
    swiper.addEventListener("mouseleave", startAutoScroll);
    swiper.addEventListener("touchstart", stopAutoScroll);
    swiper.addEventListener("touchend", () => {
      setTimeout(startAutoScroll, 2000);
    });

    return () => {
      stopAutoScroll();
      swiper.removeEventListener("mouseenter", stopAutoScroll);
      swiper.removeEventListener("mouseleave", startAutoScroll);
    };
  }, [isDragging]);

  return (
    <div className="w-full py-16 overflow-hidden">
      <div className="max-w-10xl mx-auto px-4">
        <div
          ref={swiperRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Render logos multiple times for infinite scroll effect */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className={`flex-shrink-0 w-32 h-32 rounded-full ${logo.bgColor} flex flex-col items-center justify-center text-white select-none`}
            >
              {logo.icon && !logo.text && (
                <div className="text-2xl font-bold">{logo.icon}</div>
              )}
              {logo.text && (
                <div className="text-center px-2">
                  <div className="text-sm font-bold leading-tight">
                    {logo.text}
                  </div>
                  {logo.subtitle && (
                    <div className="text-xs opacity-80 mt-1">
                      {logo.subtitle}
                    </div>
                  )}
                </div>
              )}
              {logo.icon && logo.text && (
                <div className="text-center">
                  <div className="text-lg mb-1">{logo.icon}</div>
                  <div className="text-xs font-semibold">{logo.text}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default LogoSwiper;
