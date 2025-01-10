import React, { useState } from "react";
import Confetti from "react-confetti";

const ResponseButton = ({ triggerConfetti }) => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [showResponsePrompt, setShowResponsePrompt] = useState(true);
  const [response, setResponse] = useState(null);
  const [isNoHovered, setIsNoHovered] = useState(false); // Track hover state

  const handleYesClick = () => {
    setResponse("Yes");
    setIsConfettiActive(true); // Start confetti animation
    triggerConfetti(); // Trigger the confetti effect

    // Stop confetti after 5 seconds
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 10000);
    setShowResponsePrompt(false); // Hide prompt after response
  };

  const handleNoClick = () => {
    setResponse("No");
    setShowResponsePrompt(false); // Hide prompt after response
  };

  // Function to handle when the cursor is over the "No" button
  const handleNoHover = () => {
    setIsNoHovered(true);
  };

  const handleNoLeave = () => {
    setIsNoHovered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Confetti Effect */}
      {isConfettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          gravity={0.5}
          numberOfPieces={200}
          recycle={true}
          run={isConfettiActive}
        />
      )}

      {/* Show Response Prompt */}
      {showResponsePrompt ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-500 mb-6">
            Will you be my Valentine?
          </h2>
          <div className="mt-5 flex space-x-8 relative">
            {/* Yes Button */}
            <button
              className="px-8 py-4 bg-green-500 text-white text-xl rounded-full shadow-lg hover:bg-green-400 transition-all"
              onClick={handleYesClick}
            >
              Yes
            </button>

            {/* No Button with Bounce Animation on Hover for Mobile */}
            <button
              className={`px-8 py-4 bg-red-500 text-white text-xl rounded-full shadow-lg transform transition-all duration-500 ease-in-out ${
                isNoHovered
                  ? "hover:scale-110 hover:bg-red-400 absolute sm:animate-bounce md:animate-none"
                  : ""
              }`}
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
              onMouseLeave={handleNoLeave}
            >
              No
            </button>
          </div>
        </div>
      ) : (
        // Show response message
        <div className="text-center mt-5">
          {response === "Yes" ? (
            <h2 className="text-2xl font-bold text-green-500">
              You made my day! 💖
            </h2>
          ) : (
            <h2 className="text-2xl font-bold text-red-500">
              Maybe next time... 😔
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default ResponseButton;
