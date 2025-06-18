import React from "react";
import "./storedetails.css";

const StoreDetails = () => {
  return (
    <div className="store-section">
      <h2>Our Store</h2>
      <div className="store-container">
        {/* Left Panel - Store Info */}
        <div className="store-info">
          <h3>Store - Bangalore</h3>
          <p>
            Manikant, 73, 100 Feet Ring Rd, BTM 2nd Stage, Bengaluru,
            <br />
            Karnataka 560076, India
          </p>
          <p>Monday - Sunday : 10 AM - 9 PM</p>
          <a
            href="https://www.google.com/maps/place/73,+100+Feet+Ring+Rd,+BTM+2nd+Stage,+Bengaluru,+Karnataka+560076,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Get directions
          </a>
        </div>

        {/* Right Panel - Image */}
        <div className="store-image">
          <img src="/images/store-inside.jpg" alt="Store Interior" />
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
