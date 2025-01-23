import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

       
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h5 className="text-sm sm:text-base md:text-lg text-center font-bold text-gray-400 mb-10 ">About </h5>
        <h1
          className="text-[40px] font-mars  font-bold uppercase tracking-tight relative"
          style={{
            letterSpacing: "0.3em",
            color: "transparent",
            WebkitTextStroke: "2px #FFFFFF", // Outline stroke
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(to right, #FFFFFF, #797979)",
          }}
        >
        RENDERVERSE
        </h1>
          <p className="mb-8 leading-relaxed font-poppins text-gray-400 ">
          At Renderverse, we don’t just create—we innovate. We <br/> turn your boldest ideas into extraordinary realities with a <br/> unique blend of artistry and technology. As a forward <br/>-thinking creative company, our team is fueled by <br/> passion and driven by results, crafting tailor-made <br/> solutions that set you apart in a world of possibilities.

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
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
