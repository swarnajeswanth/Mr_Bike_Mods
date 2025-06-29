import React, { useState, useEffect } from "react";
import "./highlightsection.css";

import Main from "../assets/Main.png"; // Assuming you have a CSS file for styling
import Main1 from "../assets/Main1.png";
import Main2 from "../assets/Main2.png";

const images = [Main, Main1, Main2];

const HighlightSection = () => {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-banner">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="slide-img"
      />
      <button className="nav-btn left" onClick={goPrev}>
        &lt;
      </button>
      <button className="nav-btn right" onClick={goNext}>
        &gt;
      </button>
    </div>
  );
};

export default HighlightSection;
