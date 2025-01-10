import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimesCircle } from "react-icons/fa";

const ResponseButton = ({ triggerConfetti }) => {
  const [showResponsePrompt, setShowResponsePrompt] = useState(true);
  const [response, setResponse] = useState(null);
  const [isNoHovered, setIsNoHovered] = useState(false);

  const handleYesClick = () => {
    setResponse("Yes");
    setShowResponsePrompt(false);
    triggerConfetti(); // Trigger confetti in the Gallery
  };

  const handleNoClick = () => {
    setResponse("No");
    setShowResponsePrompt(false);
  };

  const handleNoHover = () => setIsNoHovered(true);
  const handleNoLeave = () => setIsNoHovered(false);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {showResponsePrompt ? (
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-pink-500 mb-6 animate-pulse">
            Will you be my Valentine? 💖
          </h2>
          <div className="mt-8 flex space-x-8 relative">
            {/* Yes Button */}
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 hover:from-green-500 hover:to-green-400 transform transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleYesClick}
            >
              Yes 💕
            </motion.button>

            {/* No Button */}
            <motion.div
              onMouseEnter={handleNoHover}
              onMouseLeave={handleNoLeave}
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <button
                className="px-10 py-4 bg-gradient-to-r from-red-400 to-red-500 text-white text-xl font-bold rounded-full shadow-lg transform transition-all"
                onClick={handleNoClick}
              >
                No 💔
              </button>
              {isNoHovered && (
                <FaTimesCircle
                  className="absolute inset-0 text-white text-4xl -translate-x-1/2 -translate-y-1/2 transform animate-ping"
                  style={{ left: "50%", top: "50%" }}
                />
              )}
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-8">
          {response === "Yes" ? (
            <h2 className="text-3xl font-bold text-green-500">
              You made my day! 🌹💞
            </h2>
          ) : (
            <div className="text-3xl font-bold text-red-500 flex flex-col items-center">
              <FaTimesCircle className="text-6xl mb-4 animate-bounce" />
              <span>Heartbreaks take time to heal.... 😔</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResponseButton;
