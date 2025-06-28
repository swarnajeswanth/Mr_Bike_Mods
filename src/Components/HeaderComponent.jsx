import React, { useState } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./headercomponent.css"; // Assuming you have a CSS file for styling
const HeaderComponent = ({ loggedIn, category, setCategory }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop View */}
      <div className="top-nav">
        <p
          style={{
            fontWeight: "bolder",
            letterSpacing: "2px",
            padding: " 5px 10px",
            borderRadius: "5px",
            backgroundColor: "#d3d3d4",
          }}
        >
          Mr.BikeModz
        </p>

        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
            <FaUserCircle size={30} style={{ marginRight: "6px" }} />
            <div>
              {loggedIn ? (
                <span className="bold">
                  My account <FaChevronDown size={10} />
                </span>
              ) : (
                <span className="account-text">
                  <Link
                    to="/auth"
                    style={{ textDecoration: "none", fontWeight: "bolder" }}
                  >
                    Login
                  </Link>
                </span>
              )}
            </div>
          </div>
          <div className="cart">
            <FaShoppingCart size={24} />
            <span className="cart-count">0</span>
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="header-container">
        <div className="nav-left">
          {!isMobileMenuOpen ? (
            <FaBars
              className="hamburger-icon"
              size={22}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          ) : (
            <RxCross2
              className="hamburger-icon"
              size={22}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>

        <div className="nav-center">
          <p className="logo-text">Mr.BikeModz</p>
        </div>

        <div className="nav-right">
          <Link to="/cart" className="nav-icon cart-link">
            <FaShoppingCart />
            <span className="cart-badge">0</span>
          </Link>
          <Link to="/auth" className="nav-icon">
            <FaUserCircle />
          </Link>
        </div>

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
    </>
  );
};

export default HeaderComponent;
