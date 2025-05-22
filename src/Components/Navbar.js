import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceItems = [
    "App & Web Development",
    "Software Development",
    "AI Development",
    "3D Modelling",
    "Electronics and IoT",
    "Augmented & Virtual Reality",
    "Development",
    "Game Development",
  ];

  return (
    <>
      <div className="px-4 py-2 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="logo.png"
              alt="Renderverse Logo"
              className="w-20 h-20 ml-4"
            />
          </div>

          <nav className="bg-gray-800  text-white rounded-full shadow-lg max-w-4xl flex-1 mx-8 relative">
            <div className="px-8  py-3">
              <div className="flex items-center justify-center">
                <div className="hidden md:flex items-center justify-center">
                  <div className="flex items-center space-x-8">
                    <a
                      href="/"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                    >
                      Home
                    </a>
                    <a
                      href="/about"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                    >
                      About Us
                    </a>

                    <div className="relative">
                      <button
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
                      >
                        Our Services
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      {isServicesOpen && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-gray-900 rounded-lg shadow-xl z-50"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="p-4">
                            {serviceItems.map((service, index) => (
                              <a
                                key={index}
                                href={`/services/${service
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")
                                  .replace(/&/g, "and")}`}
                                className="block text-sm text-cyan-400 hover:text-cyan-300 py-2 border-b border-gray-700 last:border-b-0 transition-colors duration-200"
                              >
                                {service}
                              </a>
                            ))}
                            <div className="mt-4 pt-2 border-t border-gray-700">
                              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                                More Services
                                <span>→</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <a
                      href="/creations"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                    >
                      Our Creations
                    </a>
                    <a
                      href="/careers"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                    >
                      Careers
                    </a>
                    <a
                      href="/contact"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                <button
                  className="md:hidden p-2 hover:bg-gray-700 rounded-full transition-colors duration-200"
                  onClick={() => {
                    console.log("Menu toggled", !isMenuOpen);
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </nav>

          <div className="w-20"></div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 mr-5 text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-start mb-8 ml-14">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-gray-700 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-8">
            <img src="logo.png" alt="Renderverse Logo" className="w-16 h-20" />
          </div>

          <div className="space-y-6">
            <a
              href="/"
              className="block text-lg font-medium hover:text-gray-300 transition-colors duration-200 py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-lg font-medium hover:text-gray-300 transition-colors duration-200 py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>

            <div className="py-2 border-b border-gray-700">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-lg font-medium hover:text-gray-300 transition-colors duration-200"
              >
                Our Services
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="mt-4 ml-4 space-y-3">
                  {serviceItems.map((service, index) => (
                    <a
                      key={index}
                      href={`/services/${service
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/&/g, "and")}`}
                      className="block text-sm text-cyan-400 hover:text-cyan-300 py-1 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service}
                    </a>
                  ))}
                  <button className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 mt-3">
                    More Services
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>

            <a
              href="/creations"
              className="block text-lg font-medium hover:text-gray-300 transition-colors duration-200 py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Creations
            </a>
            <a
              href="/careers"
              className="block text-lg font-medium hover:text-gray-300 transition-colors duration-200 py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
            <a
              href="/contact"
              className="block text-lg font-medium hover:text-gray-300 transition-colors duration-200 py-2 border-b border-gray-700 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
