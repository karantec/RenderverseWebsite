import React from "react";

const testimonials = [
  {
    name: "Kabir Verma",
    role: "Operations Head, Cloudify Systems",
    review:
      "Renderverse delivered beyond our expectations! Their innovative solutions and quick turnaround have truly set them apart. We couldn’t be happier with the results!",
    stars: 4.5,
    title: "Web development",
  },
  {
    name: "Kabir Verma",
    role: "Operations Head, Cloudify Systems",
    review:
      "Renderverse delivered beyond our expectations! Their innovative solutions and quick turnaround have truly set them apart. We couldn’t be happier with the results!",
    stars: 4.5,
    title: "Web development",
  },
  {
    name: "Kabir Verma",
    role: "Operations Head, Cloudify Systems",
    review:
      "Renderverse delivered beyond our expectations! Their innovative solutions and quick turnaround have truly set them apart. We couldn’t be happier with the results!",
    stars: 4.5,
    title: "Web development",
  },
];

const TestimonialCard = () => {
  return (
    <div className="text-white py-28 px-4 ">
      {/* Title Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 font-poppins text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
        Trusted by Visionaries, Like You.
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-center font-bold text-gray-400 mb-10">
        Excellence Engineered for You
      </p>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-72 lg:w-80 bg-gradient-to-br from-purple-700 via-purple-600 to-blue-600 p-6 rounded-xl shadow-lg"
          >
            <h4 className="text-sm text-gray-300 font-semibold mb-2">
              {testimonial.title}
            </h4>
            <p className="text-base text-gray-100 mb-6">{testimonial.review}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  className={`w-5 h-5 ${
                    starIndex < Math.floor(testimonial.stars)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="ml-2 text-yellow-400 text-sm font-semibold">
                {testimonial.stars}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Placeholder for user image */}
                </div>
                <div className="ml-4">
                  <h5 className="text-sm font-medium">{testimonial.name}</h5>
                  <p className="text-xs text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <div>
                <svg
                  className="w-8 h-8 text-white opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10h2v8H7zm8 0h2v8h-2zm-8 2h8v2H7zm0 2h8v2H7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
