import React, { useEffect, useRef, useState } from "react";
import "./retailerdashboard.css";
import {
  FaChartLine,
  FaBoxOpen,
  FaTags,
  FaCogs,
  FaEnvelope,
  FaSignOutAlt,
  FaThLarge,
  FaBars,
} from "react-icons/fa";
import { gsap } from "gsap";

const RetailerDashboard = () => {
  const dashboardRef = useRef();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      dashboardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="retailer-dashboard" ref={dashboardRef}>
      <div className="mobile-header">
        <FaBars
          className="hamburger-icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <h2 className="logo">Mr BikeModz</h2>
      </div>

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <FaThLarge /> Dashboard
            </li>
            <li>
              <FaBoxOpen /> Orders
            </li>
            <li className="sub">- Add</li>
            <li className="sub">- Manage Inventory</li>
            <li>
              <FaTags /> Discount Manager
            </li>
            <li>
              <FaChartLine /> Analytics
            </li>
            <li>
              <FaEnvelope /> Messages
            </li>
            <li>
              <FaCogs /> Settings
            </li>
            <li>
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <h2>Welcome back, Retailer Name</h2>
        <div className="overview-grid">
          <div>Total Orders</div>
          <div>Pending Shipments</div>
          <div>Low Stock Items</div>
          <div>Revenue This Month</div>
        </div>
        <div className="charts-grid">
          <div>Sales vs. Returns (Chart)</div>
          <div>Orders by Category (Chart)</div>
        </div>
        <div className="recent-orders">Recent Orders (Table)</div>
      </main>
    </div>
  );
};

export default RetailerDashboard;
