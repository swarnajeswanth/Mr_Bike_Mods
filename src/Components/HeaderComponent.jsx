import React, { useState } from "react";
import "./navcomponent.css";
import { FaBars, FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [category, setCategory] = useState("All categories");
  const loggedIn = false;

  return (
    <div className="header-container">
      {/* Left: Hamburger (Mobile) */}
      <div className="nav-left">
        <FaBars
          className="hamburger-icon"
          size={22}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Center: Logo */}
      <div className="nav-center">
        <p className="logo-text">Mr.BikeModz</p>
      </div>

      {/* Right: Icons */}
      <div className="nav-right">
        <FaSearch className="nav-icon" />
        <Link to="/cart" className="nav-icon cart-link">
          <FaShoppingCart />
          <span className="cart-badge">0</span>
        </Link>
        <Link to="/auth" className="nav-icon">
          <FaUserCircle />
        </Link>
      </div>

      {/* Optional: Expanded mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <input type="text" placeholder="Search..." />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All categories</option>
            <option>Helmets</option>
            <option>Accessories</option>
          </select>
          {!loggedIn && (
            <Link to="/auth" className="mobile-login">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
