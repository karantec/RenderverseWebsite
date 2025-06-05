import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

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

  const handleServicesEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="px-4 py-2 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="logo3.png"
              alt="Renderverse Logo"
              className="w-20 h-20 ml-4"
            />
          </div>

          <nav className="bg-gray-800 text-white rounded-full shadow-lg max-w-4xl flex-1 mx-8 relative">
            <div className="px-8 py-3">
              <div className="flex items-center justify-center">
                <div className="hidden md:flex items-center justify-center">
                  <div className="flex items-center space-x-8">
                    <a
                      href="/"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-all duration-300 ease-out whitespace-nowrap relative group"
                    >
                      Home
                      <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                      href="/about"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-all duration-300 ease-out whitespace-nowrap relative group"
                    >
                      About Us
                      <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <div
                      className="relative"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                      ref={dropdownRef}
                    >
                      <button className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-all duration-300 ease-out whitespace-nowrap flex items-center gap-1 relative group">
                        Our Services
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ease-out ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                      </button>

                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-gray-900 rounded-lg shadow-2xl z-50 transition-all duration-300 ease-out origin-top ${
                          isServicesOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {serviceItems.map((service, index) => (
                              <a
                                key={index}
                                href={`/services/${service
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")
                                  .replace(/&/g, "and")}`}
                                className="block text-sm text-cyan-400 hover:text-cyan-300 hover:bg-gray-800 py-3 px-3 transition-all duration-200 ease-out rounded-md hover:translate-x-1"
                                style={{
                                  animationDelay: `${index * 50}ms`,
                                  animation: isServicesOpen
                                    ? `slideInLeft 0.3s ease-out forwards`
                                    : "none",
                                }}
                              >
                                {service}
                              </a>
                            ))}
                          </div>
                          <div className="mt-6 pt-4 border-t border-gray-700 flex justify-center">
                            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-200 ease-out flex items-center gap-2 hover:shadow-lg">
                              More Services
                              <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="/creations"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-all duration-300 ease-out whitespace-nowrap relative group"
                    >
                      Our Creations
                      <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                      href="/careers"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-all duration-300 ease-out whitespace-nowrap relative group"
                    >
                      Careers
                      <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                      href="/contact"
                      className="text-sm font-bold uppercase py-4 hover:text-gray-300 transition-all duration-300 ease-out whitespace-nowrap relative group"
                    >
                      Contact Us
                      <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>

                <button
                  className="md:hidden p-2 hover:bg-gray-700 rounded-full transition-all duration-200 hover:scale-110"
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 mr-5 text-white z-50 transform transition-all duration-500 ease-out md:hidden shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-start mb-8 ml-14">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-all duration-200 p-2 hover:bg-gray-700 rounded-full hover:scale-110"
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
              className="block text-lg font-medium hover:text-gray-300 hover:translate-x-2 transition-all duration-300 ease-out py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-lg font-medium hover:text-gray-300 hover:translate-x-2 transition-all duration-300 ease-out py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>

            <div className="py-2 border-b border-gray-700">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-lg font-medium hover:text-gray-300 hover:translate-x-2 transition-all duration-300 ease-out"
              >
                Our Services
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ease-out ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-4 ml-4 space-y-3">
                  {serviceItems.map((service, index) => (
                    <a
                      key={index}
                      href={`/services/${service
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/&/g, "and")}`}
                      className="block text-sm text-cyan-400 hover:text-cyan-300 hover:translate-x-2 py-1 transition-all duration-300 ease-out"
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isServicesOpen
                          ? `fadeInUp 0.3s ease-out forwards`
                          : "none",
                      }}
                    >
                      {service}
                    </a>
                  ))}
                  <button className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-200 ease-out flex items-center gap-2 mt-3 hover:shadow-lg">
                    More Services
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <a
              href="/creations"
              className="block text-lg font-medium hover:text-gray-300 hover:translate-x-2 transition-all duration-300 ease-out py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Creations
            </a>
            <a
              href="/careers"
              className="block text-lg font-medium hover:text-gray-300 hover:translate-x-2 transition-all duration-300 ease-out py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
            <a
              href="/contact"
              className="block text-lg font-medium hover:text-gray-300 hover:translate-x-2 transition-all duration-300 ease-out py-2 border-b border-gray-700 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
