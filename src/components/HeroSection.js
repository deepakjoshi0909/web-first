import React, { useState, useEffect } from "react";

const HeroSection = ({ scrollToGallery }) => {
  const [text, setText] = useState("");
  const message = "Hey [Your Crush's Name], this is for you 💖";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + message[index]);
      index += 1;
      if (index === message.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [message]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-pink-500 to-pink-700 overflow-hidden">
      {/* Animated Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute text-3xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Typing Text */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
        {text}
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-white opacity-90">
        I built this just for you, click below to explore!
      </p>

      {/* Call to Action Button */}
      <button
        className="mt-8 px-8 py-4 bg-white text-pink-500 rounded-lg shadow-lg font-bold text-lg hover:bg-pink-200 hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
        onClick={scrollToGallery}
      >
        Discover
      </button>
    </div>
  );
};

export default HeroSection;
