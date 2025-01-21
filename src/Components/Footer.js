import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-[#A5A5A5] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://renderverse.in/wp-content/uploads/2024/05/cropped-RENDERVERSE.png"
              alt="Renderverse Logo"
              className="w-10 h-auto"
            />
            <h2 className="text-xl text-white font-bold">Renderverse</h2>
          </div>
          <p className="font-poppins text-[16px] leading-relaxed">
            At Renderverse, we don’t just create—we innovate. We turn your boldest ideas into extraordinary realities with a unique blend of artistry and technology. As a forward-thinking creative company, our team is fueled by passion and driven by results, crafting tailor-made solutions that set you apart in a world of possibilities.
          </p>
        </div>

        {/* Explore Links */}
        <div className="col-span-1">
          <h3 className="text-lg mb-4 text-white font-bold">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/works" className="hover:text-white">Our Works</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="col-span-1">
          <h3 className="text-lg mb-4 text-white font-bold">Contact Us</h3>
          <ul className="space-y-2">
            <li><a href="mailto:contact@renderverse.in" className="hover:text-white">contact@renderverse.in</a></li>
            <li><a href="tel:+917319524047" className="hover:text-white">+91 73195-24047</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1">
          <h3 className="text-lg mb-4 text-white font-bold">Social Media</h3>
          <div className="flex space-x-4">
            <Link to="/"  className="hover:text-white" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Link>
            <Link to = "/" className="hover:text-white" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324z" />
              </svg>
            </Link>
            <Link to = "/" className="hover:text-white" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.59.58-2.46.69A4.31 4.31 0 0021.86 4c-.87.52-1.82.9-2.84 1.1A4.29 4.29 0 0015.5 3a4.29 4.29 0 00-4.28 4.28c0 .33.04.66.1.98-3.57-.18-6.73-1.89-8.85-4.48a4.24 4.24 0 00-.58 2.16c0 1.49.76 2.8 1.91 3.56a4.3 4.3 0 01-1.93-.53v.05c0 2.1 1.49 3.85 3.46 4.25-.36.1-.74.15-1.13.15-.28 0-.54-.03-.8-.08.54 1.67 2.11 2.89 3.96 2.92A8.59 8.59 0 012 19.53 12.1 12.1 0 006.44 21c7.55 0 11.67-6.26 11.67-11.69 0-.18 0-.37-.01-.55A8.43 8.43 0 0022.46 6z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-8">
        <p className="text-center text-sm">© 2024 Renderverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
