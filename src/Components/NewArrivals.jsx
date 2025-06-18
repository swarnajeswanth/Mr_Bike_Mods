// components/NewArrivals.jsx
import React from "react";
import "./NewArrivals.css";

const NewArrivals = () => {
  return (
    <div className="new-arrivals-grid">
      <div className="grid-left">
        <div className="grid-box">
          <h3>MOBILE HOLDERS</h3>
          <img src="/images/mobile-holder.png" alt="Mobile Holder" />
          <p>Starts from ₹199/-</p>
        </div>
        <div className="grid-box">
          <h3>NAVIGATION SYSTEMS</h3>
          <img src="/images/navigation.png" alt="Navigation System" />
          <p>Get Yours Now!</p>
        </div>
      </div>

      <div className="grid-center">
        <iframe
          className="deals-video"
          src="https://www.youtube.com/embed/iK7UxMCyv1U?autoplay=1&loop=1&mute=1&playlist=iK7UxMCyv1U"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="grid-right">
        <div className="grid-box">
          <h3>MAINTENANCE PARTS</h3>
          <img src="/images/maintenance.png" alt="Maintenance Parts" />
        </div>
        <div className="grid-box">
          <h3>PERFORMANCE PARTS</h3>
          <img src="/images/performance.png" alt="Performance Parts" />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
