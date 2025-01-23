import React from "react";

const UserProfileCard = () => {
  return (
    <div className="bg-purple-500 w-72 rounded-lg p-4 text-white relative overflow-hidden">
      <img
        src="https://via.placeholder.com/150" // Replace with the actual image URL
        alt="User"
        className="w-24 h-24 rounded-full mx-auto shadow-lg object-cover"
      />
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">Samarpit Jain</h2>
        <p className="text-sm text-gray-300">UI/UX Design Intern</p>
      </div>
      <a
        href="#"
        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        aria-label="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.43 19.43h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.93 10.29h-3v-4.79c0-1.14-.03-2.61-1.59-2.61-1.59 0-1.84 1.24-1.84 2.53v4.87h-3v-9h2.88v1.23h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.55 1.97 3.55 4.52v4.79z" />
        </svg>
      </a>
    </div>
  );
};

export default UserProfileCard;
