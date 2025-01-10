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
    <div ref={ref} className="py-16 bg-white relative">
      {showConfetti && <Confetti />} {/* Show confetti here */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-pink-500 mb-10">
        Beautiful Moments 💖
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover max-w-[350px] max-h-[300px] mx-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default Gallery;
