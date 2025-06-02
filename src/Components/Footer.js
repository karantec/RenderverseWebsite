import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  X,
} from "lucide-react";

const Footer = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const openCalendly = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  // You can also use Calendly's popup widget instead of iframe
  const openCalendlyPopup = () => {
    // Replace 'your-calendly-username' with your actual Calendly username
    window.open(
      "https://calendly.com/your-calendly-username",
      "_blank",
      "width=800,height=600"
    );
  };

  return (
    <>
      <footer className="bg-black text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <img
                  src="logo.png"
                  alt="Xiorent Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h2 className="text-2xl text-white font-bold tracking-wider">
                Xiorent
              </h2>
            </div>
            <p className="font-poppins text-sm leading-relaxed text-gray-400">
              At XIORENT, we blend artistry with technology to turn bold ideas
              into extraordinary realities. Driven by passion and results, we
              craft unique solutions that set you apart.
            </p>
          </div>

          {/* Explore Links */}
          <div className="col-span-1">
            <h3 className="text-lg mb-6 text-white font-semibold">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services offered
                </a>
              </li>
              <li>
                <a
                  href="/works"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Our works
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openCalendly();
                  }}
                  type="button"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2 hover:bg-gray-800 px-2 py-1 rounded cursor-pointer border-none bg-transparent"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Quick Meeting</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg mb-6 text-white font-semibold">
              Contact us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <a
                  href="mailto:contact@renderverse.in"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  contact@renderverse.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <a
                  href="tel:+917319524047"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +91 73195-24047
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg mb-6 text-white font-semibold">
              Social media
            </h3>
            <div className="flex space-x-4">
              <a
                href="/"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="/"
                className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/officialrenderverse/"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/917319524047"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            © all the copy right are reserved by XIORENT.
          </p>
        </div>
      </footer>

      {/* Fixed WhatsApp Quick Connect Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/917319524047"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Quick WhatsApp Connect"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat with us on WhatsApp
          </span>
        </a>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-full max-h-[90vh] relative overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                Schedule a Meeting
              </h3>
              <button
                onClick={closeCalendly}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                aria-label="Close Calendly"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="h-full pb-16">
              <iframe
                src="https://calendly.com/your-calendly-username"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Alternative: Fixed Calendly Quick Book Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openCalendly();
          }}
          type="button"
          className="group bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center border-none cursor-pointer"
          aria-label="Quick Book Meeting"
        >
          <Calendar className="h-6 w-6" />
          <span className="absolute left-full ml-3 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Book a Meeting
          </span>
        </button>
      </div>
    </>
  );
};

export default Footer;
