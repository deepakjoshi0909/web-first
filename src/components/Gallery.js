import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import firstImage from "../assests/11.jpg";
import secondImage from "../assests/2.jpg";
import thirdImage from "../assests/3.jpg";

const Gallery = React.forwardRef(({ showConfetti }, ref) => {
  const images = [
    { src: firstImage, alt: "Memory 1", caption: "Our first conversation 💬" },
    { src: secondImage, alt: "Memory 2", caption: "The moment I saw you 😍" },
    { src: thirdImage, alt: "Memory 3", caption: "Your smile that brightens my day 🌞" },
  ];

  return (
    <div ref={ref} className="py-16 bg-gradient-to-b from-pink-200 via-white to-pink-200 relative">
      {showConfetti && <Confetti />} {/* Show confetti here */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-pink-600 mb-12">
        Beautiful Moments 💖
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold px-4 text-center">
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-full shadow-lg font-bold text-lg hover:from-red-400 hover:to-pink-500 hover:shadow-xl transform transition-all duration-300 ease-out ring-2 ring-pink-300"
        >
          For My Crush 💕
        </button>
      </div>
    </div>
  );
});

export default Gallery;
