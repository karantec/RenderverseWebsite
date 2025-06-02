import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

const OurCreations = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce App",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Dashboard UI",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      title: "3D Product Visualization",
      category: "3D Modeling",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "VR Experience",
      category: "Virtual Reality",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      title: "AI Chatbot",
      category: "AI Development",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Gaming Platform",
      category: "Game Development",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative projects spanning web
            development, mobile apps, AI solutions, and immersive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">
          {/* Main Featured Video Section */}
          <div className="lg:col-span-2 relative group">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 h-full flex flex-col justify-center items-center relative overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-12 h-12 bg-cyan-300 rounded-lg rotate-45"></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-pink-300 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-8 h-8 bg-yellow-300 rounded-full"></div>
              </div>

              {/* Main Content */}
              <div className="relative z-10 text-center">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-white mb-4">
                    INTRODUCING
                  </h3>
                  <h1 className="text-6xl font-black text-white mb-2">
                    FAMILY
                  </h1>
                  <h2 className="text-5xl font-bold text-white mb-4">Style</h2>
                  <p className="text-blue-100 text-lg">
                    A comprehensive family management platform
                  </p>
                </div>

                {/* Video Controls */}
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <button
                    onClick={handlePlayPause}
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </button>

                  <button
                    onClick={handleMute}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6 text-white" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-white" />
                    )}
                  </button>

                  <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md mx-auto">
                  <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-300 ${
                        isPlaying ? "w-1/3" : "w-1/4"
                      }`}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-blue-100 mt-2">
                    <span>1:24</span>
                    <span>4:12</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div
                className="absolute top-4 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-4 left-16 w-3 h-3 bg-red-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`bg-gradient-to-br ${project.color} rounded-xl p-4 h-28 lg:h-24 xl:h-28 overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-bold text-sm lg:text-xs xl:text-sm mb-1 truncate">
                        {project.title}
                      </h4>
                      <p className="text-white/80 text-xs opacity-90">
                        {project.category}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className={`transition-all duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      <button className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs hover:bg-white/30 transition-colors duration-200">
                        View Project
                      </button>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCreations;
