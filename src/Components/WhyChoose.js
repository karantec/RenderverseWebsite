import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      position: "top-0 left-1/4 -translate-x-1/2",
      icon: "50+",
      title: "Projects delivered",
      description: "50 + Projects delivered across diverse industries.",
      isNumber: true
    },
    {
      position: "top-0 right-1/4 translate-x-1/2",
      icon: "✓",
      title: "Innovation",
      description: "Creating innovative and functional mobile applications."
    },
    {
      position: "bottom-0 left-1/4 -translate-x-1/2",
      icon: "💱",
      title: "Value Creation",
      description: "Providing exceptional value for your investment"
    },
    {
      position: "bottom-0 right-1/4 translate-x-1/2",
      icon: "⏰",
      title: "Timely Delivery",
      description: "We take deadlines seriously and deliver projects on time."
    }
  ];

  return (
    <div className=" text-white min-h-screen relative p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 font-poppins">Why choose us?</h2>
        <p className="text-gray-400 text-sm font-poppins">From Pixels to Perfection</p>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-4xl mx-auto aspect-square">
        {/* Background Circle Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="centerglobe.png" 
            alt="background"
            className="w-2/3 h-2/3 object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Driven by Passion,<br />
            Powered by<br />
            Innovation
          </h3>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm">
            More about us
          </button>
        </div>

        {/* Feature Items */}
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute ${feature.position} transform flex flex-col items-center w-64 text-center`}
          >
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border border-gray-800 mb-3">
              {feature.isNumber ? (
                <span className="text-xl font-bold">{feature.icon}</span>
              ) : (
                <span className="text-xl">{feature.icon}</span>
              )}
            </div>
            <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}

        {/* Dotted Line */}
        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-blue-500 opacity-30" />
      </div>
    </div>
  );
};

export default WhyChooseUs;