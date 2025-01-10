import React, { useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import ResponseButton from "./components/ConfettiButton";
import Footer from "./components/Footer";

function App() {
  const galleryRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const scrollToGallery = () => {
    galleryRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div>
      <HeroSection scrollToGallery={scrollToGallery} />
      <Gallery ref={galleryRef} showConfetti={showConfetti} />
      <ResponseButton triggerConfetti={triggerConfetti} />
      <Footer />
    </div>
  );
}

export default App;
