import React from "react";
import "../Hero/hero.css";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-img">
        <h1 className="hero-text">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <img src="/picture.svg" alt="hero-section" />
      </div>
    </div>
  );
}

export default Hero;
