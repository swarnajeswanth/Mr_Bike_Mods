import React, { useEffect, useRef } from "react";
import "./CustomerDashboard.css";
import {
  FaHeart,
  FaBoxOpen,
  FaAddressBook,
  FaChevronRight,
} from "react-icons/fa";
import { gsap } from "gsap";

const CustomerDashboard = () => {
  const dashboardRef = useRef(null);

  //   useEffect(() => {
  //     gsap.from(dashboardRef.current, {
  //       opacity: 0,
  //       y: 20,
  //       duration: 0.6,
  //       ease: "power2.out",
  //     });
  //   });

  return (
    <div className="customer-dashboard" ref={dashboardRef}>
      <h1>Customer Dashboard</h1>

      <nav className="dashboard-nav">
        <a href="#">Dashboard</a>
        <a href="#">My Orders</a>
        <a href="#">Wishlist</a>
        <a href="#">Addresses</a>
        <a href="#">Support</a>
        <a href="#">Logout</a>
      </nav>

      <h2>Hello, Jeswanth! Here's what's new for you.</h2>

      <div className="dashboard-grid">
        <div className="card">
          <h3>
            <FaBoxOpen /> My Orders
          </h3>
          <div className="order-item" />
          <div className="order-item" />
          <div className="order-item" />
          <button className="btn-outline">See All Orders</button>
        </div>

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

        <div className="card">
          <h3>Saved Addresses</h3>
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
