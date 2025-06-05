import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Create geometric shapes
    const shapes = [];
    for (let i = 0; i < 8; i++) {
      const geometry =
        Math.random() > 0.5
          ? new THREE.SphereGeometry(0.5, 16, 16)
          : new THREE.BoxGeometry(1, 1, 1);

      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0, 0, 0.7),
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      shapes.push(mesh);
      scene.add(mesh);
    }

    camera.position.z = 20;
    sceneRef.current = { scene, camera, renderer, particlesMesh, shapes };

    // Animation loop
    const animate = (time) => {
      // Rotate particles
      particlesMesh.rotation.x = time * 0.0003;
      particlesMesh.rotation.y = time * 0.0002;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.003 + index * 0.0005;
        shape.position.y = Math.sin(time * 0.001 + index) * 2;
      });

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return; // Basic validation
    }
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Three.js Background */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: "none" }}
      />

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 via-gray-700/10 to-gray-600/10" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-6xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-gray-400 text-xl font-light">
              Let's create something amazing together
            </p>
          </div>

          {/* Form Container */}
          <div className="relative">
            {/* Glassmorphism Container */}
            <div className="backdrop-blur-sm bg-gray-900/50 rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-gray-800/50 transition-all duration-500 transform hover:scale-[1.02]">
              {/* Success Message */}
              {isSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/90 backdrop-blur-xl rounded-3xl border border-green-500/50 animate-fade-in">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-700/50 flex items-center justify-center animate-bounce">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-white transition-colors">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 hover:bg-gray-700/50"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-white transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 hover:bg-gray-700/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-white transition-colors">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 hover:bg-gray-700/50"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-white transition-colors">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 hover:bg-gray-700/50 resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                {/* Submit Button */}
                <div
                  onClick={handleSubmit}
                  className="w-full py-4 px-8 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-500/25 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Contact Info */}
              {/* <div className="mt-8 pt-8 border-t border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-600/50 transition-colors">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">hello@company.com</p>
                  </div>

                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-600/50 transition-colors">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                  </div>

                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-600/50 transition-colors">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
