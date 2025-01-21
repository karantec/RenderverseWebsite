import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Our creations", href: "/creations" },
    { title: "Careers", href: "/careers" },
    { title: "Contact us", href: "/contact" },
  ];

  // Images from public folder
  const ufoIcon = "/icons.png";
  const crossIcon = "/cross.png";

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center">
            <img
              src="https://renderverse.in/wp-content/uploads/2024/05/cropped-RENDERVERSE.png"
              alt="Renderverse Logo"
              className="w-24 mt-6 h-auto"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm text-[16px] hover:text-blue-400 transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img
              src={isMenuOpen ? crossIcon : ufoIcon}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              className="w-12 h-12 hover:opacity-80 transition-opacity duration-200"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden mt-4 pb-4"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-[20px] text-sm font-poppins ml-6 hover:text-blue-400 transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
