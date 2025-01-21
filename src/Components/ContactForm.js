import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 relative overflow-hidden">
      {/* Stars background effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 1}s infinite`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-2xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
          Let's connect together
        </h1>
        <p className="text-gray-400  mt-8 text-center mb-8">
          Have any project in mind, let's bring it to reality
        </p>
        
        <form className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 bg-transparent border border-gray-800 rounded-full text-white  focus:outline-none focus:border-gray-600"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-4 bg-transparent border border-gray-800 rounded-full text-white  focus:outline-none focus:border-gray-600"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-4 bg-transparent border border-gray-800 rounded-full text-white  focus:outline-none focus:border-gray-600"
            />
          </div>
          
          <textarea
            placeholder="Message"
            rows={1}
            className="w-full p-4 bg-transparent border border-gray-800 rounded-full text-white  focus:outline-none focus:border-gray-600 resize-none"
          />
          
          <div className="text-center mt-6">
            <button
              type="submit"
              className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
      
      {/* Add a subtle gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
    </div>
  );
};

export default ContactForm;