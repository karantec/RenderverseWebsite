import React from 'react';

const ProjectCard = () => {
  return (
    <div className="relative w-64 h-80 bg-black rounded-lg p-4 flex flex-col justify-between">
      {/* Badge */}
      <div className="absolute top-2 left-0 bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded-r">
        Excellent
      </div>

      {/* Project Title */}
      <div className="absolute top-4 right-4 text-white text-lg font-bold">
        Project - 001
      </div>

      {/* Purple Content Area */}
      <div className="w-full h-3/4 bg-purple-500 rounded-lg"></div>

      {/* Star Ratings */}
      <div className="flex justify-center mt-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="gold"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
