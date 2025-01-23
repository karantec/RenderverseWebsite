import React from "react";

const Hero2 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex-shrink-0">
        <img
  className="object-cover -ml-40 mr-10 object-center rounded"
  alt="hero"
  src="Planet2.png"
/>

        </div>
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2   lg:pl-16 md:pl-10 pl-0 flex flex-col md:items-start md:text-left items-center text-center">
          <h5 className="text-sm sm:text-base md:text-lg font-bold text-gray-400 mb-4">
            About
          </h5>
          <h1
            className="text-[40px] font-mars font-bold uppercase tracking-tight relative"
            style={{
              letterSpacing: "0.3em",
              color: "transparent",
              WebkitTextStroke: "2px #FFFFFF", // Outline stroke
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(to right, #FFFFFF, #797979)",
            }}
          >
            Our Mission
          </h1>
          <h6 className="text-sm sm:text-base md:text-lg font-poppins text-gray-400 mb-6">
            Crafting Digital Excellence
          </h6>
          <p className="mb-8 leading-relaxed font-poppins text-gray-400">
            Empowering creators and businesses with innovative, tailored <br />
            solutions that drive growth and inspire excellence. We specialize in{" "}
            <br />
            providing comprehensive services, all crafted to meet the unique{" "}
            <br />
            needs of our clients. Our mission is to blend technology with
            creative <br />
            expertise to deliver impactful and user-centric solutions. By
            fostering <br />
            collaboration and innovation, we aim to help businesses unlock their{" "}
            <br />
            full potential, enhance their digital presence, and create immersive{" "}
            <br />
            experiences that leave a lasting impression on their audiences.
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
      </div>
    </section>
  );
};

export default Hero2;
