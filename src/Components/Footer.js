import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
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
                <a
                  href="/book-meeting"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Book a Quick Meeting
                </a>
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
    </>
  );
};

export default Footer;
