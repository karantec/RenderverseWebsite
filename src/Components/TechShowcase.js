// import React, { useState, useEffect } from "react";

// const TechnologiesSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const technologies = [
//     { name: "Node.js", color: "#339933", icon: "⬢" },
//     { name: "Next.js", color: "#000000", icon: "▲" },
//     { name: "Vue.js", color: "#4FC08D", icon: "▼" },
//     { name: "Angular.js", color: "#DD0031", icon: "🅰" },
//     { name: "Python", color: "#3776AB", icon: "🐍" },
//     { name: "PHP", color: "#777BB4", icon: "🐘" },
//     { name: "Flutter", color: "#02569B", icon: "💙" },
//     { name: "Swift", color: "#FA7343", icon: "🦉" },
//     { name: "Unity", color: "#000000", icon: "⚫" },
//     { name: "Unreal Engine", color: "#0E1128", icon: "🎮" },
//     { name: "MongoDB", color: "#47A248", icon: "🍃" },
//     { name: "Kotlin", color: "#7F52FF", icon: "🎯" },
//     { name: "React", color: "#61DAFB", icon: "⚛" },
//     { name: "TypeScript", color: "#3178C6", icon: "TS" },
//     { name: "Docker", color: "#2496ED", icon: "🐳" },
//     { name: "AWS", color: "#FF9900", icon: "☁️" },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % technologies.length);
//         setIsAnimating(false);
//       }, 300);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [technologies.length]);

//   const getVisibleTechs = () => {
//     const visible = [];
//     for (let i = -2; i <= 2; i++) {
//       const index =
//         (currentIndex + i + technologies.length) % technologies.length;
//       visible.push({
//         ...technologies[index],
//         offset: i,
//         key: `${index}-${currentIndex}`,
//       });
//     }
//     return visible;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8 overflow-hidden">
//       <div className="max-w-6xl w-full">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
//             Technologies
//             <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               We Use
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             Cutting-edge tools and frameworks that power our innovative
//             solutions
//           </p>
//         </div>

//         {/* Main Animation Container */}
//         <div className="relative h-96 flex items-center justify-center">
//           {/* Background Glow Effects */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
//           </div>

//           {/* Floating Particles */}
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 2}s`,
//                 animationDuration: `${2 + Math.random() * 3}s`,
//               }}
//             />
//           ))}

//           {/* Technology Cards Flow */}
//           <div className="relative w-full h-full flex items-center justify-center">
//             {getVisibleTechs().map((tech) => {
//               const scale =
//                 tech.offset === 0 ? 1.2 : 1 - Math.abs(tech.offset) * 0.15;
//               const opacity =
//                 tech.offset === 0 ? 1 : 1 - Math.abs(tech.offset) * 0.3;
//               const translateX = tech.offset * 200;
//               const translateY = Math.abs(tech.offset) * 20;
//               const blur = Math.abs(tech.offset) * 2;

//               return (
//                 <div
//                   key={tech.key}
//                   className={`absolute transition-all duration-700 ease-out ${
//                     isAnimating ? "duration-300" : ""
//                   }`}
//                   style={{
//                     transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
//                     opacity,
//                     filter: `blur(${blur}px)`,
//                     zIndex: tech.offset === 0 ? 10 : 5 - Math.abs(tech.offset),
//                   }}
//                 >
//                   <div
//                     className={`
//                       relative p-8 rounded-3xl backdrop-blur-xl border border-white/10
//                       ${
//                         tech.offset === 0
//                           ? "bg-white/10 shadow-2xl shadow-purple-500/25"
//                           : "bg-white/5"
//                       }
//                       hover:bg-white/15 transition-all duration-300
//                       min-w-[200px] text-center
//                     `}
//                     style={{
//                       boxShadow:
//                         tech.offset === 0
//                           ? `0 20px 40px ${tech.color}20, 0 0 60px ${tech.color}10`
//                           : "none",
//                     }}
//                   >
//                     {/* Icon */}
//                     <div
//                       className="text-6xl mb-4 filter drop-shadow-lg"
//                       style={{
//                         color: tech.offset === 0 ? tech.color : "#ffffff80",
//                         textShadow:
//                           tech.offset === 0 ? `0 0 20px ${tech.color}` : "none",
//                       }}
//                     >
//                       {tech.icon}
//                     </div>

//                     {/* Tech Name */}
//                     <h3
//                       className={`
//                         font-bold text-xl mb-2 transition-all duration-300
//                         ${tech.offset === 0 ? "text-white" : "text-white/60"}
//                       `}
//                       style={{
//                         textShadow:
//                           tech.offset === 0
//                             ? `0 0 10px ${tech.color}40`
//                             : "none",
//                       }}
//                     >
//                       {tech.name}
//                     </h3>

//                     {/* Animated Border */}
//                     {tech.offset === 0 && (
//                       <div
//                         className="absolute inset-0 rounded-3xl opacity-60 animate-pulse"
//                         style={{
//                           background: `linear-gradient(45deg, ${tech.color}20, transparent, ${tech.color}20)`,
//                           animation: "borderRotate 3s linear infinite",
//                         }}
//                       />
//                     )}

//                     {/* Glow Effect */}
//                     {tech.offset === 0 && (
//                       <div
//                         className="absolute inset-0 rounded-3xl blur-xl opacity-30 -z-10"
//                         style={{ backgroundColor: tech.color }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Center Highlight Ring */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div
//               className="w-80 h-80 border-2 border-white/10 rounded-full animate-spin opacity-30"
//               style={{ animationDuration: "20s" }}
//             />
//             <div
//               className="absolute w-60 h-60 border border-purple-500/30 rounded-full animate-spin"
//               style={{
//                 animationDuration: "15s",
//                 animationDirection: "reverse",
//               }}
//             />
//           </div>
//         </div>

//         {/* Bottom Navigation Dots */}
//         <div className="flex justify-center mt-16 space-x-3">
//           {technologies.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`
//                 w-3 h-3 rounded-full transition-all duration-300
//                 ${
//                   index === currentIndex
//                     ? "bg-purple-500 shadow-lg shadow-purple-500/50 scale-125"
//                     : "bg-white/30 hover:bg-white/50"
//                 }
//               `}
//             />
//           ))}
//         </div>

//         {/* Additional Info */}
//         <div className="text-center mt-12">
//           <p className="text-gray-400 text-lg">
//             <span className="text-purple-400 font-semibold">
//               {technologies.length}+ Technologies
//             </span>{" "}
//             and many more in our arsenal
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes borderRotate {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           33% {
//             transform: translateY(-10px) rotate(1deg);
//           }
//           66% {
//             transform: translateY(5px) rotate(-1deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TechnologiesSection;
import React, { useState, useEffect } from "react";

const TechnologiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    { name: "Node.js", color: "#339933", icon: "⬢" },
    { name: "Next.js", color: "#000000", icon: "▲" },
    { name: "Vue.js", color: "#4FC08D", icon: "▼" },
    { name: "Angular.js", color: "#DD0031", icon: "🅰" },
    { name: "Python", color: "#3776AB", icon: "🐍" },
    { name: "PHP", color: "#777BB4", icon: "🐘" },
    { name: "Flutter", color: "#02569B", icon: "💙" },
    { name: "Swift", color: "#FA7343", icon: "🦉" },
    { name: "Unity", color: "#000000", icon: "⚫" },
    { name: "Unreal Engine", color: "#0E1128", icon: "🎮" },
    { name: "MongoDB", color: "#47A248", icon: "🍃" },
    { name: "Kotlin", color: "#7F52FF", icon: "🎯" },
    { name: "React", color: "#61DAFB", icon: "⚛" },
    { name: "TypeScript", color: "#3178C6", icon: "TS" },
    { name: "Docker", color: "#2496ED", icon: "🐳" },
    { name: "AWS", color: "#FF9900", icon: "☁️" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const getVisibleTechs = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentIndex + i + technologies.length) % technologies.length;
      visible.push({
        ...technologies[index],
        offset: i,
        key: `${index}-${currentIndex}`,
      });
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-8 overflow-hidden">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Technologies
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              We Use
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge tools and frameworks that power our innovative
            solutions
          </p>
        </div>

        {/* Main Animation Container */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Background Glow Effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Technology Cards Flow */}
          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleTechs().map((tech) => {
              const scale =
                tech.offset === 0 ? 1.2 : 1 - Math.abs(tech.offset) * 0.15;
              const opacity =
                tech.offset === 0 ? 1 : 1 - Math.abs(tech.offset) * 0.3;
              const translateX = tech.offset * 200;
              const translateY = Math.abs(tech.offset) * 20;
              const blur = Math.abs(tech.offset) * 2;

              return (
                <div
                  key={tech.key}
                  className={`absolute transition-all duration-700 ease-out ${
                    isAnimating ? "duration-300" : ""
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    filter: `blur(${blur}px)`,
                    zIndex: tech.offset === 0 ? 10 : 5 - Math.abs(tech.offset),
                  }}
                >
                  <div
                    className={`
                      relative p-8 rounded-3xl backdrop-blur-xl border border-gray-700/50
                      ${
                        tech.offset === 0
                          ? "bg-gray-800/80 shadow-2xl"
                          : "bg-gray-900/60"
                      }
                      hover:bg-gray-700/70 transition-all duration-300
                      min-w-[200px] text-center
                    `}
                    style={{
                      boxShadow:
                        tech.offset === 0
                          ? `0 20px 40px ${tech.color}30, 0 0 60px ${tech.color}20, inset 0 1px 0 rgba(255,255,255,0.1)`
                          : "inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="text-6xl mb-4 filter drop-shadow-lg"
                      style={{
                        color: tech.offset === 0 ? tech.color : "#64748b",
                        textShadow:
                          tech.offset === 0 ? `0 0 20px ${tech.color}` : "none",
                      }}
                    >
                      {tech.icon}
                    </div>

                    {/* Tech Name */}
                    <h3
                      className={`
                        font-bold text-xl mb-2 transition-all duration-300
                        ${tech.offset === 0 ? "text-white" : "text-gray-400"}
                      `}
                      style={{
                        textShadow:
                          tech.offset === 0
                            ? `0 0 10px ${tech.color}50`
                            : "none",
                      }}
                    >
                      {tech.name}
                    </h3>

                    {/* Animated Border */}
                    {tech.offset === 0 && (
                      <div
                        className="absolute inset-0 rounded-3xl opacity-60 animate-pulse"
                        style={{
                          background: `linear-gradient(45deg, ${tech.color}20, transparent, ${tech.color}20)`,
                          animation: "borderRotate 3s linear infinite",
                        }}
                      />
                    )}

                    {/* Glow Effect */}
                    {tech.offset === 0 && (
                      <div
                        className="absolute inset-0 rounded-3xl blur-xl opacity-30 -z-10"
                        style={{ backgroundColor: tech.color }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Highlight Ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-80 h-80 border-2 border-gray-700/30 rounded-full animate-spin opacity-40"
              style={{ animationDuration: "20s" }}
            />
            <div
              className="absolute w-60 h-60 border border-cyan-500/20 rounded-full animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            />
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center mt-16 space-x-3">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "bg-cyan-500 shadow-lg shadow-cyan-500/50 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }
              `}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">
            <span className="text-cyan-400 font-semibold">
              {technologies.length}+ Technologies
            </span>{" "}
            and many more in our arsenal
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes borderRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TechnologiesSection;
