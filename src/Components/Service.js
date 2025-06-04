import React, { useState, useEffect } from "react";

const AutoSwiperCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cards = [
    {
      id: 1,
      category: "App Development",
      title: "Creating apps that users love!",
      description:
        "Building innovative mobile and web applications with cutting-edge technology",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      gradient: "from-purple-600 via-pink-600 to-red-600",
    },
    {
      id: 2,
      category: "Electronics and IoT",
      title: "Captivating IoT solutions!",
      description:
        "Developing smart connected devices that transform everyday experiences",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
    },
    {
      id: 3,
      category: "Game Development",
      title: "Creating addictive games for players!",
      description:
        "Crafting immersive gaming experiences that keep players engaged",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
    },
    {
      id: 4,
      category: "Web Development",
      title: "Building stunning websites!",
      description: "Creating responsive and dynamic web experiences",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop",
      gradient: "from-green-600 via-blue-600 to-purple-600",
    },
    {
      id: 5,
      category: "AI & Machine Learning",
      title: "Intelligent solutions for tomorrow!",
      description:
        "Leveraging artificial intelligence to solve complex problems",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      gradient: "from-orange-600 via-red-600 to-pink-600",
    },
    {
      id: 6,
      category: "Cloud Computing",
      title: "Scalable cloud infrastructure!",
      description:
        "Building robust and scalable cloud solutions for modern businesses",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    },
    {
      id: 7,
      category: "Cybersecurity",
      title: "Protecting digital assets!",
      description:
        "Comprehensive security solutions to safeguard your business",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      gradient: "from-red-600 via-orange-600 to-yellow-600",
    },
    {
      id: 8,
      category: "Data Analytics",
      title: "Turning data into insights!",
      description:
        "Advanced analytics and visualization to drive business decisions",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    },
    {
      id: 9,
      category: "Blockchain",
      title: "Decentralized solutions!",
      description:
        "Revolutionary blockchain technology for secure and transparent systems",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=300&fit=crop",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    },
    {
      id: 10,
      category: "Digital Marketing",
      title: "Amplifying your brand!",
      description: "Strategic digital marketing campaigns that drive results",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      gradient: "from-pink-600 via-rose-600 to-red-600",
    },
    {
      id: 11,
      category: "UX/UI Design",
      title: "Designing beautiful experiences!",
      description:
        "User-centered design that creates memorable digital interactions",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      gradient: "from-amber-600 via-orange-600 to-red-600",
    },
    {
      id: 12,
      category: "DevOps",
      title: "Streamlining development!",
      description:
        "Automated workflows and CI/CD pipelines for efficient delivery",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      gradient: "from-slate-600 via-gray-600 to-zinc-600",
    },
    {
      id: 13,
      category: "E-commerce",
      title: "Building online stores!",
      description: "Complete e-commerce solutions that drive sales and growth",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      gradient: "from-teal-600 via-green-600 to-emerald-600",
    },
    {
      id: 14,
      category: "Automation",
      title: "Intelligent process automation!",
      description: "Streamlining workflows with smart automation solutions",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      gradient: "from-indigo-600 via-blue-600 to-sky-600",
    },
    {
      id: 15,
      category: "AR/VR Development",
      title: "Immersive reality experiences!",
      description: "Cutting-edge augmented and virtual reality applications",
      image:
        "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=500&h=300&fit=crop",
      gradient: "from-fuchsia-600 via-pink-600 to-rose-600",
    },
  ];

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered, cards.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Discover what we can build together
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={card.id} className="w-full flex-shrink-0 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Main Featured Card */}
                  <div className="md:col-span-2">
                    <div
                      className={`relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br ${card.gradient} group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                    >
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${card.image})` }}
                      ></div>

                      <div className="relative z-10 h-full flex flex-col justify-between p-8">
                        <div>
                          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                            {card.category}
                          </span>
                          <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                            {card.title}
                          </h3>
                          <p className="text-gray-200 text-lg mb-6 group-hover:text-white transition-colors duration-300">
                            {card.description}
                          </p>
                        </div>

                        <button className="self-start px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                          VIEW MORE
                        </button>
                      </div>

                      {/* Animated Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-400/20 rounded-full animate-bounce"></div>
                    </div>
                  </div>

                  {/* Side Cards */}
                  <div className="space-y-6">
                    {cards.slice(0, 2).map((sideCard, sideIndex) => (
                      <div
                        key={`side-${sideIndex}`}
                        className={`relative h-44 rounded-xl overflow-hidden bg-gradient-to-br ${sideCard.gradient} group cursor-pointer transform transition-all duration-300 hover:scale-105`}
                      >
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                          style={{ backgroundImage: `url(${sideCard.image})` }}
                        ></div>

                        <div className="relative z-10 h-full flex flex-col justify-between p-6">
                          <div>
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2">
                              {sideCard.category}
                            </span>
                            <h4 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                              {sideCard.title}
                            </h4>
                          </div>

                          <button className="self-start px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                            VIEW MORE
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="bg-white/20 rounded-full h-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-400 to-purple-400 h-full transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSwiperCarousel;
