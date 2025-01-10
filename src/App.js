import React, { useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import ConfettiButton from "./components/ConfettiButton";
import Footer from "./components/Footer";

function App() {
  const galleryRef = useRef(null); // Ref for the Gallery section
  const [showConfetti, setShowConfetti] = useState(false);

  const scrollToGallery = () => {
    galleryRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to Gallery
  };

  const triggerConfetti = () => {
    setShowConfetti(true); // Show confetti
    setTimeout(() => setShowConfetti(false), 4000); // Hide confetti after 4 seconds
  };

  return (
    <div>
      <HeroSection scrollToGallery={scrollToGallery} />
      <Gallery ref={galleryRef} showConfetti={showConfetti} />
      {/* Pass triggerConfetti as a prop */}
      <ConfettiButton triggerConfetti={triggerConfetti} />
      <Footer />
    </div>
  );
}

export default App;
