import React, { useState } from "react";
import "./NavComponent.css";
// import logo from "../assets/logo.png";
import {
  FaSearch,
  FaShoppingCart,
  FaChevronDown,
  FaUserCircle,
} from "react-icons/fa";
import HeaderComponent from "./HeaderComponent";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown("");

  const mainMenu = [
    { label: "New Arrivals!!" },
    { label: "Shop By Bike", dropdown: ["KTM", "Honda", "Royal Enfield"] },
    { label: "Combos", dropdown: ["Combo 1", "Combo 2"] },
    { label: "Shop By Brands" },
    { label: "Helmet and Accessories" },
    { label: "Riding Gear" },
    { label: "Accessories" },
    { label: "Lubricants", dropdown: ["Engine Oil", "Coolant"] },
    { label: "Performance Parts" },
    { label: "Apparels", dropdown: ["Gloves", "Jackets"] },
    { label: "Kids Garage" },
    { label: "Weekly Offer" },
    { label: "Wholesale" },
  ];

  return (
    <div>
      <HeaderComponent />
      <div className="bottom-nav">
        {mainMenu.map((item, index) => (
          <div
            key={index}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            {item.label}
            {item.dropdown && (
              <FaChevronDown size={10} className="dropdown-icon" />
            )}
            {item.dropdown && openDropdown === item.label && (
              <div className="dropdown-menu">
                {item.dropdown.map((sub, i) => (
                  <div key={i} className="dropdown-item">
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
