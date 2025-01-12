import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import firstImage from "../assests/11.jpg";
import secondImage from "../assests/2.jpg";
import thirdImage from "../assests/3.jpg";

const Gallery = React.forwardRef(({ showConfetti }, ref) => {
  const [activeStory, setActiveStory] = useState(null);

  const images = [
    {
      src: firstImage,
      alt: "Memory 1",
      caption: "Our first conversation 💬",
      story: "Wo pehli mulaqat, wo pehli baat, \nDil ke kone mein bas gaya tera saath. \nTere lafzon mein tha kuch aisa jaadu, \nHar pal bas tujhe sunte rehne ka tha irada. ✨",
    },
    {
      src: secondImage,
      alt: "Memory 2",
      caption: "The moment I saw you 😍",
      story: "Wo pehli nazar ka jadoo chal gaya, \nDil ka har kona tujhmein dhal gaya. \nTeri muskaan ne wo karishma kar diya, \nJo sapne mein socha tha, sab sach kar diya. 💕",
    },
    {
      src: thirdImage,
      alt: "Memory 3",
      caption: "Your smile that brightens my day 🌞",
      story: "Teri muskaan, jaise bahaar ka mausam, \nDil ko sukoon, aur khushiyon ka aalam. \nHar subah tujhe dekhna meri dua ban gayi, \nTeri hansi meri zindagi ki wajah ban gayi. 🌹",
    },
  ];

  const closeModal = () => setActiveStory(null);

  return (
    <div ref={ref} className="py-16 bg-gradient-to-b from-pink-200 via-white to-pink-200 relative">
      {showConfetti && <Confetti />}
      
      {/* Romantic Introduction */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-pink-600 mb-4">
        Beautiful Moments 💖
      </h2>
      <p className="text-center text-lg text-gray-700 italic mb-12">
        Har tasveer ke peeche ek kahaani chhupi hai... ❤️ Tap to reveal.
      </p>
      <p className="text-center text-xl text-gray-800 font-medium mb-6">
        "Tasveerein sirf yaadein hi nahi dikhati, unke peeche ke lamhe aur ehsaas bhi chhupte hain. 
        Yeh tasveerein meri zindagi ke kuch anmol pal hai, jo maine sirf tumhare liye sanjoh kar rakhe hain." 🌹
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveStory(image)}
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
              <span className="absolute bottom-4 text-sm text-gray-300 italic">
                Tap to see the story 📖
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Story */}
      {activeStory && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">{activeStory.caption}</h3>
            <p className="text-gray-700 whitespace-pre-line">{activeStory.story}</p>
            <button
              className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Romantic Button */}
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
