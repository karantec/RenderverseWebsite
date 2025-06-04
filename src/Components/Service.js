import React, { useState, useEffect, useCallback, useMemo } from "react";

const EnhancedAutoSwiperCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const cards = useMemo(
    () => [
      {
        id: 1,
        category: "App Development",
        title: "Creating apps that users love!",
        description:
          "Building innovative mobile and web applications with cutting-edge technology",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
        gradient: "from-purple-600 via-pink-600 to-red-600",
        icon: "📱",
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
        icon: "🔌",
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
        icon: "🎮",
      },
      {
        id: 4,
        category: "Web Development",
        title: "Building stunning websites!",
        description: "Creating responsive and dynamic web experiences",
        image:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop",
        gradient: "from-green-600 via-blue-600 to-purple-600",
        icon: "🌐",
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
        icon: "🤖",
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
        icon: "☁️",
      },
    ],
    []
  );

  // Auto-advance with smooth progress animation
  useEffect(() => {
    if (!isHovered && !isTransitioning) {
      let progressInterval;
      let autoInterval;

      // Smooth progress bar animation
      progressInterval = setInterval(() => {
        setProgressWidth((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 30);

      // Auto advance after 3 seconds
      autoInterval = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
        setProgressWidth(0);
        setTimeout(() => setIsTransitioning(false), 500);
      }, 3000);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(autoInterval);
      };
    } else {
      setProgressWidth(0);
    }
  }, [isHovered, currentIndex, cards.length, isTransitioning]);

  const goToSlide = useCallback(
    (index) => {
      if (index !== currentIndex && !isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex(index);
        setProgressWidth(0);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    },
    [currentIndex, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      const nextIndex =
        currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
      goToSlide(nextIndex);
    }
  }, [currentIndex, cards.length, goToSlide, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      const prevIndex =
        currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
      goToSlide(prevIndex);
    }
  }, [currentIndex, cards.length, goToSlide, isTransitioning]);

  const currentCard = cards[currentIndex];
  const sideCards = cards.slice(
    (currentIndex + 1) % cards.length,
    (currentIndex + 3) % cards.length
  );
  if (sideCards.length < 2) {
    sideCards.push(...cards.slice(0, 2 - sideCards.length));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <span className="text-2xl animate-bounce">✨</span>
            <span className="text-white font-medium">Our Premium Services</span>
          </div>
          <h2 className="text-6xl font-bold text-white mb-4 leading-tight">
            Transforming{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Ideas
            </span>{" "}
            into Reality
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover innovative solutions crafted with passion and precision
          </p>
        </div>

        {/* Enhanced Carousel Container */}
        <div
          className="relative overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 bg-white/5 backdrop-blur-sm border border-white/10">
            {/* Enhanced Main Featured Card */}
            <div className="lg:col-span-2">
              <div
                className={`relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br ${currentCard.gradient} group cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl shadow-xl`}
                style={{
                  transform: isTransitioning ? "scale(0.98)" : "scale(1)",
                  opacity: isTransitioning ? 0.8 : 1,
                }}
              >
                {/* Enhanced Background */}
                <div className="absolute inset-0 bg-black/20"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${currentCard.image})`,
                    filter: "brightness(0.7) contrast(1.1)",
                    opacity: 0.8,
                  }}
                ></div>

                {/* Animated Overlay Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl animate-bounce"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between p-10">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl animate-bounce">
                        {currentCard.icon}
                      </span>
                      <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/30 shadow-lg">
                        {currentCard.category}
                      </span>
                    </div>

                    <h3 className="text-5xl font-bold text-white mb-6 group-hover:text-yellow-300 transition-all duration-500 leading-tight">
                      {currentCard.title}
                    </h3>

                    <p className="text-gray-200 text-xl mb-8 group-hover:text-white transition-colors duration-500 leading-relaxed">
                      {currentCard.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="group/btn px-10 py-4 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full text-white font-bold hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
                      <span className="flex items-center space-x-2">
                        <span>EXPLORE MORE</span>
                        <svg
                          className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className="text-white/80 text-sm font-medium">
                      {String(currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(cards.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Side Cards */}
            <div className="space-y-6">
              {sideCards.map((sideCard, sideIndex) => (
                <div
                  key={`side-${sideCard.id}-${sideIndex}`}
                  className={`relative h-[235px] rounded-2xl overflow-hidden bg-gradient-to-br ${sideCard.gradient} group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg`}
                  onClick={() =>
                    goToSlide(
                      cards.findIndex((card) => card.id === sideCard.id)
                    )
                  }
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${sideCard.image})`,
                      filter: "brightness(0.8)",
                      opacity: 0.7,
                    }}
                  ></div>

                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{sideCard.icon}</span>
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/20">
                          {sideCard.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                        {sideCard.title}
                      </h4>
                    </div>

                    <button className="self-start px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                      VIEW MORE
                    </button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 z-20 border border-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
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
            disabled={isTransitioning}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 z-20 border border-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
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

        {/* Enhanced Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`relative transition-all duration-500 rounded-full ${
                index === currentIndex
                  ? "w-12 h-4 bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg"
                  : "w-4 h-4 bg-white/30 hover:bg-white/50 hover:scale-125"
              } disabled:opacity-50`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Progress Bar */}
        <div className="mt-8 max-w-lg mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/10 shadow-inner">
            <div
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 h-full transition-all duration-75 ease-linear rounded-full shadow-lg"
              style={{ width: `${isHovered ? 0 : progressWidth}%` }}
            >
              <div className="w-full h-full bg-white/30 animate-pulse rounded-full"></div>
            </div>
          </div>
          <div className="text-center mt-3 text-white/70 text-sm font-medium">
            {isHovered ? "Auto-play paused" : "Auto-advancing..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAutoSwiperCarousel;
