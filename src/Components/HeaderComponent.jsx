import React, { useState } from "react";
import "./navcomponent.css";
import {
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
const HeaderComponent = () => {
  const [category, setCategory] = useState("All categories");

  return (
    <div className="top-nav">
      <img src={""} alt="Logo" className="logo" />
      <button className="bike-btn">Shop By Bike</button>

      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All categories</option>
          <option>Helmets</option>
          <option>Accessories</option>
        </select>
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      <div className="account-cart">
        <div className="account">
          <FaUserCircle size={20} style={{ marginRight: "6px" }} />
          <div>
            <span className="account-text">Login / Signup</span>
            <span className="bold">
              My account <FaChevronDown size={10} />
            </span>
          </div>
        </div>
        <div className="cart">
          <FaShoppingCart size={24} />
          <span className="cart-count">0</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
