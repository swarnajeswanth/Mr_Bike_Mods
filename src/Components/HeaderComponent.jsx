import React, { useState } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./headercomponent.css"; // Assuming you have a CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/UserSlice";

const HeaderComponent = ({ category, setCategory }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loggedIn = user.isLoggedIn || false; // Assuming user.isLoggedIn is a boolean
  const handleLogout = () => {
    // Perform logout logic here (e.g., dispatch logoutUser, clear localStorage)
    console.log("Logged out");
    dispatch(logoutUser());
  };
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
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
              {user.isLoggedIn ? (
                <span className="bold" style={{ position: "relative" }}>
                  My account{" "}
                  <FaChevronDown
                    size={10}
                    onClick={() => setShowMenu(!showMenu)}
                  />
                  <div
                    className={`account-dropdown ${showMenu ? "show" : ""}`}
                    style={{
                      position: "absolute",
                      padding: "10px",
                      top: "30px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      zIndex: 9000,
                    }}
                  >
                    <div
                      className="dropdown-item"
                      onClick={
                        user.role === "Customer"
                          ? () => navigate("/customer-profile")
                          : () => navigate("/retailer-profile")
                      }
                    >
                      Profile
                    </div>
                    <div className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </div>
                  </div>
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
          <div
            className="cart"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart size={24} />
            <span className="cart-count">0</span>
            <span> Cart</span>
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
            <div className={`account-dropdown-mb ${!showMenu ? "show" : ""}`}>
              <div
                className="dropdown-item"
                onClick={
                  user.role === "Customer"
                    ? () => navigate("/customer-profile")
                    : () => navigate("/retailer-profile")
                }
              >
                Profile
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderComponent;
