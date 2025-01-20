import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#A5A5A5] py-16">
      <div className="max-w-8xl ml-24 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1">
  {/* Logo & Name Container */}
  <div className="flex items-center space-x-3 mb-4">
    <img 
      src="https://renderverse.in/wp-content/uploads/2024/05/cropped-RENDERVERSE.png" 
      alt="Renderverse Logo" 
      className="w-10 h-auto" 
    />
    <h2 className="text-xl text-white font-bold">Renderverse</h2>
  </div>

  {/* Description */}
  <p className="font-poppins text-[16px] leading-relaxed">
    At Renderverse, we don't just create—we innovate. We turn your boldest ideas into 
    extraordinary realities with a unique blend of artistry and technology. As a forward-thinking 
    creative company, our team is fueled by passion and driven by results, crafting tailor-made 
    solutions that set you apart in a world of possibilities.
  </p>
</div>



        {/* Explore Links */}
        <div className="col-span-1 space-x-6">
          <h3 className="text-lg mb-4 text-white font-bold ml-6">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white">About us</a></li>
            <li><a href="/services" className="hover:text-white">Services offered</a></li>
            <li><a href="/works" className="hover:text-white">Our works</a></li>
            <li><a href="/contact" className="hover:text-white">Contact us</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & conditions</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="col-span-1">
          <h3 className="text-lg  mb-4 text-white font-poppins  font-bold ml-6">Contact us</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:contact@renderverse.in" className="hover:text-white">
                contact@renderverse.in
              </a>
            </li>
            <li>
              <a href="tel:+917319524047" className="hover:text-white">
                +91 73195-24047
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1">
          <h3 className="text-lg  mb-4 text-white font-poppins  font-bold " >Social media</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-8">
        <p className="text-center text-sm">© 2024 Renderverse.</p>
      </div>
    </footer>
  );
};

export default Footer;