// components/ProductCard.jsx
import React from "react";
import "./individualproduct.css";

const ProductCard = ({
  image,
  title,
  brand,
  price,
  originalPrice,
  savePercent,
  emi,
  isStartingPrice,
  showColorBox,
}) => {
  return (
    <div className="product-card">
      {savePercent && <div className="save-label">Save {savePercent}%</div>}
      <img src={image} alt={title} className="product-img" />
      <div className="product-info">
        <p className="price">
          {isStartingPrice ? "From " : ""}
          Rs. {price}
          {originalPrice && (
            <span className="original-price">Rs. {originalPrice}</span>
          )}
        </p>
        <p className="product-title">{title}</p>
        <p className="product-brand">{brand}</p>
        {showColorBox && <div className="color-box"></div>}
        <div className="emi-row">
          <span>or ₹{emi}/Month</span>
          <button className="buy-btn">Buy on EMI &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
