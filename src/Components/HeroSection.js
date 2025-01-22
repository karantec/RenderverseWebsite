import React from "react";

const RenderverseSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white"
      style={{
        backgroundImage: `url('Property.png')`, // Update with the actual image path
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundRepeat: "no-repeat", // Prevents tiling of the background image
        backgroundPosition: "center", // Centers the image
      }}
    >
      {/* Renderverse Text */}
      <div className="relative flex flex-col items-center text-center px-4">
        {/* Filled + Outline Text */}
        <h1
          className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] mt-16 sm:mt-20 font-bold uppercase tracking-tight relative"
          style={{
            letterSpacing: "0.3em",
            color: "transparent",
            WebkitTextStroke: "2px #FFFFFF", // Outline stroke
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(to right, #FFFFFF, #797979)",
          }}
        >
          Renderverse
        </h1>
        <div className="mt-16 sm:mt-24">
          {/* Subtitle */}
          <p
            className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-poppins tracking-wide"
            style={{
              fontFamily: "Poppins, sans-serif",
              letterSpacing: "0.2em",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            Rendering Your Universe
          </p>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            background-size: contain; /* Shrinks the image on smaller screens */
            background-position: top; /* Adjusts the position for better visibility */
          }
        }
        @media (max-width: 480px) {
          div {
            background-size: 100% auto; /* Ensures the width fits the screen */
            background-position: top center; /* Centers and adjusts for small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default RenderverseSection;
