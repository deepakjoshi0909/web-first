import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 py-8">
      <div className="text-center text-white">
        {/* Animated Heartbeat Text */}
        <motion.p
          className="text-xl md:text-3xl font-extrabold glow-text"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.1], opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Made with 💕 Just for You!
        </motion.p>

        {/* Love Animation */}
        <motion.div
          className="mt-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <span className="text-lg md:text-2xl italic font-semibold glow-text">
            💖 Every line of code has a piece of my heart! 💖
          </span>
        </motion.div>

        {/* Subtle Animation for Extra Message */}
        <motion.div
          className="mt-6 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="text-pink-200">
            🌟 You inspire me to create magic, one pixel at a time. 🌟
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
