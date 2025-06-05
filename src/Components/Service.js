import React, { useState } from "react";
import {
  X,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Shield,
} from "lucide-react";

const ServiceCardsShowcase = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      description: "Custom web applications built with modern technologies",
      theme: "from-blue-600 to-purple-700",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      fullContent:
        "We create stunning, responsive web applications using cutting-edge technologies like React, Next.js, and Node.js. Our development process focuses on performance, scalability, and user experience.",
      features: [
        "React & Next.js",
        "Responsive Design",
        "Performance Optimization",
        "SEO Ready",
      ],
    },
    {
      id: 2,
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      description: "Beautiful and intuitive user interface designs",
      theme: "from-pink-600 to-red-700",
      bgColor: "bg-gradient-to-br from-pink-50 to-red-50",
      fullContent:
        "Our design team crafts beautiful, user-centered interfaces that not only look amazing but also provide exceptional user experiences. We focus on usability, accessibility, and modern design principles.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      id: 3,
      title: "Mobile Apps",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Cross-platform mobile applications",
      theme: "from-green-600 to-teal-700",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      fullContent:
        "We develop high-quality mobile applications for both iOS and Android platforms using React Native and Flutter. Our apps are fast, reliable, and provide native-like user experiences.",
      features: [
        "React Native",
        "Flutter",
        "Native Performance",
        "App Store Optimization",
      ],
    },
    {
      id: 4,
      title: "Digital Marketing",
      icon: <Globe className="w-8 h-8" />,
      description: "Strategic digital marketing solutions",
      theme: "from-orange-600 to-yellow-700",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      fullContent:
        "Our digital marketing experts help you reach your target audience through comprehensive strategies including SEO, social media marketing, content marketing, and paid advertising campaigns.",
      features: [
        "SEO Optimization",
        "Social Media",
        "Content Strategy",
        "PPC Campaigns",
      ],
    },
    {
      id: 5,
      title: "Database Solutions",
      icon: <Database className="w-8 h-8" />,
      description: "Scalable database architecture and management",
      theme: "from-indigo-600 to-blue-700",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      fullContent:
        "We design and implement robust database solutions that grow with your business. From SQL to NoSQL, we ensure your data is secure, accessible, and optimized for performance.",
      features: [
        "Database Design",
        "Performance Tuning",
        "Data Migration",
        "Backup Solutions",
      ],
    },
    {
      id: 6,
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Comprehensive security solutions",
      theme: "from-gray-700 to-gray-900",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      fullContent:
        "Protect your digital assets with our comprehensive cybersecurity services. We provide security audits, penetration testing, and implement robust security measures to keep your business safe.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "Incident Response",
      ],
    },
  ];

  const handleCardClick = (service) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedService(service);
      setIsAnimating(false);
    }, 300);
  };

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedService(null);
      setIsAnimating(false);
    }, 300);
  };

  if (selectedService) {
    return (
      <div
        className={`min-h-screen bg-gradient-to-br ${
          selectedService.theme
        } flex items-center justify-center p-4 transition-all duration-500 ${
          isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white relative overflow-hidden">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-full bg-white/20 mb-4">
              {selectedService.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {selectedService.title}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {selectedService.fullContent}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {selectedService.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 transition-all duration-500 ${
        isAnimating ? "scale-105 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and drive
            growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service)}
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-600/50 group`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.theme} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                <span className="text-sm font-medium">Learn More</span>
                <div className="ml-2 w-0 group-hover:w-6 h-0.5 bg-current transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCardsShowcase;
