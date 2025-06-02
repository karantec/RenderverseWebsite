import React, { useState, useEffect } from "react";

export default function TechShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const technologies = [
    {
      id: "nodejs",
      name: "Node.js",
      color: "from-green-600/20 to-green-400/10",
      borderColor: "border-green-500/30 hover:border-green-400/60",
      size: "large",
      icon: (
        <svg viewBox="0 0 256 289" className="w-full h-full">
          <path
            fill="#539E43"
            d="M128 288.464c-3.975 0-7.685-1.06-11.048-2.976l-35.293-20.889c-5.24-2.976-2.65-4.036-0.931-4.596 6.829-2.385 8.219-2.915 15.048-7.028 0.794-.265 1.589-.265 2.12.265l27.075 16.06c1.06.529 2.385.529 3.18 0l105.739-61.217c1.06-.53 1.589-1.326 1.589-2.385V84.508c0-1.06-.529-2.12-1.589-2.65L127.735 20.64c-1.06-.529-2.385-.529-3.445 0L18.285 81.857c-1.06.529-1.589 1.589-1.589 2.65v122.324c0 1.06.794 2.12 1.589 2.65l28.93 16.854c15.577 7.949 25.421-1.326 25.421-10.635V93.487c0-1.589 1.326-3.18 3.18-3.18h13.458c1.589 0 3.18 1.326 3.18 3.18v122.059c0 21.418-11.578 33.26-31.785 33.26-6.299 0-11.313 0-25.156-6.829L7.949 228.378c-6.829-4.036-11.048-11.578-11.048-19.527V86.627c0-7.949 4.22-15.492 11.048-19.527L113.688 5.883c6.564-3.975 15.492-3.975 22.056 0L241.483 67.1c6.829 4.036 11.048 11.578 11.048 19.527v122.324c0 7.949-4.22 15.492-11.048 19.527L135.744 289.26c-3.18 1.916-6.829 2.915-11.048 2.915z"
          />
        </svg>
      ),
    },
    {
      id: "react",
      name: "React",
      color: "from-blue-600/20 to-cyan-400/10",
      borderColor: "border-blue-500/30 hover:border-blue-400/60",
      size: "medium",
      icon: (
        <svg viewBox="0 0 256 228" className="w-full h-full">
          <path
            fill="#00D8FF"
            d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488C219.827 147.758 256 132.184 256 113.668c0-15.624-17.041-30.224-45.517-39.844z"
          />
          <circle cx="128" cy="114" r="16" fill="#00D8FF" />
        </svg>
      ),
    },
    {
      id: "python",
      name: "Python",
      color: "from-yellow-600/20 to-blue-600/20",
      borderColor: "border-yellow-500/30 hover:border-yellow-400/60",
      size: "large",
      icon: (
        <svg viewBox="0 0 256 255" className="w-full h-full">
          <defs>
            <linearGradient
              id="python-gradient-1"
              x1="12.959%"
              y1="12.039%"
              x2="79.639%"
              y2="78.201%"
            >
              <stop offset="0%" stopColor="#387EB8" />
              <stop offset="100%" stopColor="#366994" />
            </linearGradient>
            <linearGradient
              id="python-gradient-2"
              x1="19.128%"
              y1="20.579%"
              x2="90.742%"
              y2="88.429%"
            >
              <stop offset="0%" stopColor="#FFE052" />
              <stop offset="100%" stopColor="#FFC331" />
            </linearGradient>
          </defs>
          <path
            fill="url(#python-gradient-1)"
            d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
          />
          <path
            fill="url(#python-gradient-2)"
            d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
          />
        </svg>
      ),
    },
    {
      id: "flutter",
      name: "Flutter",
      color: "from-blue-500/20 to-cyan-300/10",
      borderColor: "border-blue-400/30 hover:border-blue-300/60",
      size: "medium",
      icon: (
        <svg viewBox="0 0 256 317" className="w-full h-full">
          <path
            fill="#40D0FD"
            d="M157.666 0L0 157.667l45.253 45.254L254.371 0h-96.705z"
          />
          <path
            fill="#41D0FD"
            d="M156.567 145.396L72.249 229.714l45.254 45.254 129.824-129.824-45.254-45.254-45.506.506z"
          />
          <path
            fill="#1FBCFD"
            d="M71.6 230.364l40.506-40.506 45.254 45.254-40.506 40.507L71.6 230.364z"
          />
          <path
            fill="#095A9D"
            d="M115.12 274.619l40.506-40.506L71.6 316.463l40.507-40.506 3.013-1.338z"
          />
        </svg>
      ),
    },
    {
      id: "vue",
      name: "Vue.js",
      color: "from-green-500/20 to-emerald-400/10",
      borderColor: "border-green-400/30 hover:border-green-300/60",
      size: "small",
      icon: (
        <svg viewBox="0 0 256 221" className="w-full h-full">
          <path
            fill="#41B883"
            d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
          />
          <path
            fill="#35495E"
            d="M51.2 0l76.8 132.48L204.8 0h-47.36L128 51.2 97.92 0z"
          />
        </svg>
      ),
    },
    {
      id: "angular",
      name: "Angular",
      color: "from-red-500/20 to-pink-400/10",
      borderColor: "border-red-400/30 hover:border-red-300/60",
      size: "medium",
      icon: (
        <svg viewBox="0 0 256 272" className="w-full h-full">
          <path
            fill="#E23237"
            d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"
          />
          <path
            fill="#FFF"
            d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 29.367.498-83.556-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"
          />
        </svg>
      ),
    },
    {
      id: "nextjs",
      name: "Next.js",
      color: "from-gray-800/40 to-gray-600/20",
      borderColor: "border-gray-600/30 hover:border-gray-500/60",
      size: "small",
      icon: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <rect width="256" height="256" rx="60" fill="#000" />
          <path
            fill="#fff"
            d="M121.451 28.054c-.43.039-.86.078-1.29.157-15.808 2.676-30.536 8.862-43.25 17.656-2.637 1.85-7.454 5.29-8.386 5.996-.233.195-.195.312.156.312.273 0 2.207-1.367 4.297-3.062 8.936-7.298 20.602-12.819 32.463-15.378 3.668-.786 9.113-1.368 10.24-1.095.43.117.547.039.431-.234-.273-.43-2.051-.547-4.18-.586-1.016-.039-1.95-.039-2.48.039z"
          />
        </svg>
      ),
    },
    {
      id: "swift",
      name: "Swift",
      color: "from-orange-500/20 to-red-500/10",
      borderColor: "border-orange-400/30 hover:border-orange-300/60",
      size: "medium",
      icon: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <defs>
            <linearGradient
              id="swift-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FA7343" />
              <stop offset="100%" stopColor="#FF5722" />
            </linearGradient>
          </defs>
          <rect width="256" height="256" rx="60" fill="url(#swift-gradient)" />
          <path
            fill="#fff"
            d="M128 32c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm42.67 131.33c-7.03 7.03-18.43 7.03-25.46 0L128 146.12l-17.21 17.21c-7.03 7.03-18.43 7.03-25.46 0s-7.03-18.43 0-25.46L102.54 121l-17.21-17.21c-7.03-7.03-7.03-18.43 0-25.46s18.43-7.03 25.46 0L128 95.54l17.21-17.21c7.03-7.03 18.43-7.03 25.46 0s7.03 18.43 0 25.46L153.46 121l17.21 17.21c7.03 7.03 7.03 18.43 0 25.46z"
          />
        </svg>
      ),
    },
    {
      id: "kotlin",
      name: "Kotlin",
      color: "from-purple-500/20 to-orange-500/20",
      borderColor: "border-purple-400/30 hover:border-purple-300/60",
      size: "large",
      icon: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <defs>
            <linearGradient
              id="kotlin-gradient-1"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0095D5" />
              <stop offset="100%" stopColor="#7F6CE2" />
            </linearGradient>
            <linearGradient
              id="kotlin-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#C757BC" />
              <stop offset="100%" stopColor="#F58220" />
            </linearGradient>
          </defs>
          <polygon fill="url(#kotlin-gradient-1)" points="0,256 128,128 0,0" />
          <polygon
            fill="url(#kotlin-gradient-2)"
            points="128,128 256,0 256,256"
          />
        </svg>
      ),
    },
  ];

  const getCardClasses = (tech) => {
    const baseClasses = `
      relative group cursor-pointer transition-all duration-500 ease-out
      backdrop-blur-md bg-gradient-to-br ${tech.color}
      border ${tech.borderColor}
      rounded-3xl overflow-hidden
      transform hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl hover:shadow-${
        tech.borderColor.includes("green")
          ? "green"
          : tech.borderColor.includes("blue")
          ? "blue"
          : tech.borderColor.includes("red")
          ? "red"
          : tech.borderColor.includes("yellow")
          ? "yellow"
          : tech.borderColor.includes("orange")
          ? "orange"
          : tech.borderColor.includes("purple")
          ? "purple"
          : "gray"
      }-500/25
    `;

    const sizeClasses = {
      small:
        "col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 row-span-1 h-24 sm:h-28",
      medium:
        "col-span-6 sm:col-span-6 lg:col-span-4 xl:col-span-3 row-span-1 sm:row-span-2 h-24 sm:h-32 lg:h-40",
      large:
        "col-span-12 sm:col-span-8 lg:col-span-6 xl:col-span-4 row-span-2 sm:row-span-3 h-32 sm:h-40 lg:h-48",
    };

    return `${baseClasses} ${sizeClasses[tech.size]}`;
  };

  const getIconSize = (size) => {
    switch (size) {
      case "small":
        return "w-6 h-6 sm:w-8 sm:h-8";
      case "medium":
        return "w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16";
      case "large":
        return "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20";
      default:
        return "w-8 h-8";
    }
  };

  const getTextSize = (size) => {
    switch (size) {
      case "small":
        return "text-sm sm:text-base font-bold";
      case "medium":
        return "text-base sm:text-lg lg:text-xl font-bold";
      case "large":
        return "text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold";
      default:
        return "text-base font-bold";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Cursor Effect */}
      <div
        className="fixed w-6 h-6 bg-white/20 rounded-full blur-sm pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: hoveredCard ? "scale(2)" : "scale(1)",
        }}
      ></div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl  font-black bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-4">
              Tech Stack
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Discover the powerful technologies that drive modern development
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 auto-rows-min">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className={getCardClasses(tech)}
                onMouseEnter={() => setHoveredCard(tech.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6">
                  <div
                    className={`${getIconSize(
                      tech.size
                    )} mb-2 sm:mb-3 lg:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {tech.icon}
                  </div>
                  <h3
                    className={`text-white ${getTextSize(
                      tech.size
                    )} text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300`}
                  >
                    {tech.name}
                  </h3>
                </div>

                {/* Particle Effect */}
                {hoveredCard === tech.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
                        style={{
                          left: `${20 + i * 10}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: "2s",
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Special "More Technologies" Card */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 row-span-1 h-24 sm:h-28 relative group cursor-pointer">
              <div className="h-full bg-gradient-to-br from-indigo-600/20 to-pink-600/20 backdrop-blur-md border border-indigo-500/30 rounded-3xl flex items-center justify-center transition-all duration-500 hover:scale-105 hover:border-indigo-400/60">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-1">✨</div>
                  <p className="text-white font-bold text-sm sm:text-base">
                    and many more...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "10+", label: "Technologies" },
              { number: "5+", label: "Years Experience" },
              { number: "100+", label: "Projects Built" },
              { number: "∞", label: "Possibilities" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
