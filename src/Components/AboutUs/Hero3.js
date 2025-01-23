import React from "react";

const Hero3 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2  -ml-10  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
         
          <h1
            className="text-[40px] font-mars   font-bold uppercase tracking-tight relative"
            style={{
              letterSpacing: "0.3em",
              color: "transparent",
              WebkitTextStroke: "2px #FFFFFF", // Outline stroke
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(to right, #FFFFFF, #797979)",
            }}
          >
            Our Vision
          </h1>
          <h6 className="text-sm sm:text-base md:text-lg text-center font-poppins text-gray-400 mb-10 ">
          Creating Tomorrow, Today{" "}
          </h6>
          <p className="mb-8   leading-relaxed font-poppins text-gray-400 ">
            Setting new standards of excellence by embracing boundless <br/>
            creativity and innovation, we envision a future where technology and <br/>
            design converge seamlessly to shape extraordinary experiences. Our <br/>
            goal is to redefine industry benchmarks by delivering solutions that <br/>
            are not only visually stunning but also highly functional,
            intuitive, and impactful.By blending technology with design, we aim
            to inspire <br/> transformation, empower businesses, and create
            extraordinary <br/> experiences that redefine industry benchmarks and
            drive progress for <br/> a brighter future.
          </p>
         
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover ml-36 object-center rounded"
            alt="hero"
            src="Planet.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
