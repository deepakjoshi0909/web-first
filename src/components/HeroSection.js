import React, { useState, useEffect } from "react";

const HeroSection = ({ scrollToGallery }) => {
  const [text, setText] = useState("");
  const message = "Hey Crush, this is for you 💖";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length-1) {
        setText((prev) => prev + message[index]);
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []); // Removed 'message' from the dependency array

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 overflow-hidden">
      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-shooting-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Floating Hearts */}
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
            💖
          </span>
        ))}
      </div>

      {/* Typing Text */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        {text}
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-white opacity-90">
        Built with all my love, just for you. Let’s explore together! 💕
      </p>

      {/* Call to Action Button */}
      <button
        className="mt-8 px-10 py-4 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full shadow-lg font-bold text-lg hover:from-pink-500 hover:to-red-400 hover:shadow-xl hover:scale-110 transform transition-all duration-300 ease-out ring-2 ring-pink-300"
        onClick={scrollToGallery}
      >
        Discover Magic ✨
      </button>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 animate-glow" />
    </div>
  );
};

export default HeroSection;
