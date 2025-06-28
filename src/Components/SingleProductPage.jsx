import React, { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./SingleProductPage.css";
import gsap from "gsap";

const SingleProductPage = () => {
  const containerRef = useRef(null);
  const { state } = useLocation();
  const { id } = useParams();
  const product = state?.product;

  if (!product) {
    return <div className="product-container">Product not found.</div>;
  }

  return (
    <div className="product-container" ref={containerRef}>
      <div className="product-left">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="thumbnail-row">
          <img src={product.image} alt="thumb1" />
          <img src={product.image} alt="thumb2" />
          <img src={product.image} alt="thumb3" />
        </div>
      </div>

      <div className="product-right">
        <h1 className="product-title-single">{product.title}</h1>
        <p className="product-desc">Brand: {product.brand}</p>
        <div className="product-price">₹{product.price}</div>

        <div className="product-options">
          <label>Size:</label>
          <select>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="product-actions">
          <input type="number" min="1" defaultValue="1" />
          <button className="btn-add">Add to Cart</button>
        </div>

        <button className="btn-buy">Buy Now</button>

        {/* --- Additional Info Section --- */}
        <div className="product-extra">
          <h2>Description</h2>
          <p>
            {product.description ||
              "This premium product is designed for performance, comfort, and durability. Whether you're riding in the city or racing on the track, this gear ensures safety and style."}
          </p>

          <h2>Customer Reviews</h2>
          <div className="review">
            <strong>Arjun R.</strong>
            <p>Great quality! Really comfortable and worth the price.</p>
          </div>
          <div className="review">
            <strong>Sneha P.</strong>
            <p>Packaging was good and delivery was fast. Would recommend.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
