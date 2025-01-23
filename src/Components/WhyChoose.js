import React from "react";
import { RxValue } from "react-icons/rx";
import { IoMdTimer } from "react-icons/io";
import { LuProjector } from "react-icons/lu";
import { FaInnosoft } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-poppins md:text-4xl mb-4 lg:text-5xl font-bold">
          Why choose <strong className="text-primary font-poppins">Us</strong>
        </h2>
        <p className="text-gray-500  text-2xl font-poppins">The trusted source for why choose us</p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Projects Delivered */}
          <div
            className="text-center sm:text-right transform transition-transform hover:scale-105 duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 mx-auto sm:mx-0 bg-white rounded-full shadow-lg animate-fade-in">
              <LuProjector className="text-black w-10 h-10" /> {/* Icon Styling */}
            </div>
            <h4 className="text-2xl font-semibold mt-2 uppercase font-mars ">Projects Delivered</h4>
            <p className="text-gray-400  mt-3 text-2xl font-poppins">
              50+ Projects delivered across diverse industries.
            </p>
          </div>

          {/* Innovation */}
          <div
            className="text-center sm:text-right transform transition-transform  hover:scale-105 duration-300">
            <div className="flex items-center justify-center  w-20 h-20 mx-auto sm:mx-0 bg-white rounded-full shadow-lg animate-fade-in">
              <FaInnosoft className="text-black w-10 h-10 " /> {/* Icon Styling */}
            </div>
            <h4 className="text-2xl font-semibold mt-2 uppercase font-mars">Innovation</h4>
            <p className="text-gray-400 mt-3 text-2xl font-poppins">
              Creating innovative and functional mobile applications.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="hidden lg:block relative">
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>

          {/* Center Image */}
          <div className="flex justify-center relative">
            <img
              src="centerglobe.png"
              alt="Why Choose Us"
              className="w-96 h-96 rounded-full transform transition-transform hover:scale-110 duration-300"
            />
          </div>

          {/* Text and Button */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Discover Excellence
            </h3>
            <p className="mb-6  font-poppins font-bold">
              Driven by Passion,
              <br />
              Powered by Innovation.
            </p>
            <button className="bg-white text-black py-2 px-6 rounded-full font-poppins text-sm hover:bg-primary-dark transition">
              More About Us
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Value Creation */}
          <div
            className="text-center sm:text-left transform transition-transform hover:scale-105 duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 mx-auto sm:mx-0 bg-white rounded-full shadow-lg animate-fade-in">
              <RxValue className="text-black w-10 h-10" /> {/* Icon Styling */}
            </div>
            <h4 className="text-2xl font-semibold mt-2 uppercase font-mars">Value Creation</h4>
            <p className="text-gray-400 mt-3 text-2xl font-poppins">
              Providing exceptional value for your investment.
            </p>
          </div>

          {/* Timely Delivery */}
          <div
            className="text-center sm:text-left transform transition-transform hover:scale-105 duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 mx-auto sm:mx-0 bg-white rounded-full shadow-lg animate-fade-in">
              <IoMdTimer className="text-black w-10 h-10" /> {/* Icon Styling */}
            </div>
            <h4 className="text-2xl font-semibold mt-2 uppercase font-mars">Timely Delivery</h4>
            <p className="text-gray-400 mt-3 text-2xl font-poppins">
              We take deadlines seriously and deliver projects on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
