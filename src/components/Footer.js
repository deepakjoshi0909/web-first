import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-pink-500 py-6">
      <div className="text-center text-white">
        <motion.p
          className="text-lg md:text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Made with 💖 by [Your Name]
        </motion.p>
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
          className="mt-4"
        >
          <span className="text-xl">🌸 Sending you all my love 🌸</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
