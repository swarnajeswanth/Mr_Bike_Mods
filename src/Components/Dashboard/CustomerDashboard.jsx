import React, { useEffect, useRef, useState } from "react";
import "./CustomerDashboard.css";
import {
  FaHeart,
  FaBoxOpen,
  FaAddressBook,
  FaChevronRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  const dashboardRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      dashboardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="customer-dashboard" ref={dashboardRef}>
      {/* Header with Hamburger */}
      <div className="dashboard-header">
        <h1>Customer Dashboard</h1>
        <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar Drawer */}
      <div className={`side-drawer ${menuOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="logo"
            style={{
              height: "fit-content",
              padding: "10px",
              backgroundColor: "#d3d3d4",
              borderRadius: "10px",
              fontWeight: "bolder",
            }}
          >
            Mr.BikeModz
          </div>
          <button
            className="close-btn"
            style={{ padding: "10px 0" }}
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="drawer-nav">
          <Link to="/">Dashboard</Link>
          <Link to="/">My Orders</Link>
          <Link to="/">Wishlist</Link>
          <Link to="/">Addresses</Link>
          <Link to="/">Support</Link>
          <Link to="/">Logout</Link>
        </nav>
      </div>

      <h2>Hello, Jeswanth! Here's what's new for you.</h2>

      <div className="dashboard-grid">
        {/* Orders */}
        <div className="card">
          <h3>
            <FaBoxOpen /> My Orders
          </h3>
          <div className="order-item" />
          <div className="order-item" />
          <div className="order-item" />
          <button className="btn-outline">See All Orders</button>
        </div>

        {/* Wishlist */}
        <div className="card">
          <h3>
            <FaHeart /> Wishlist
          </h3>
          <div className="wishlist-grid">
            <div className="wishlist-item" />
            <div className="wishlist-item" />
            <div className="wishlist-item" />
          </div>
          <button className="btn-outline">See All Orders</button>
        </div>

        {/* Addresses */}
        <div className="card wide">
          <h3>
            <FaAddressBook /> Saved Addresses
          </h3>
          <div className="address-item">
            <div className="avatar" />
            <div className="info">
              <div className="line" />
              <div className="line" />
            </div>
            <div className="btn-small" />
          </div>
          <div className="address-item">
            <div className="avatar" />
            <div className="info">
              <div className="line" />
              <div className="line" />
            </div>
            <div className="btn-small" />
          </div>
        </div>

        {/* Quick Ticket */}
        <div className="card">
          <h3>Support</h3>
          <div className="quick-address">
            <div className="line short" />
            <FaChevronRight className="arrow-icon" />
          </div>
          <button className="btn-outline">New Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
