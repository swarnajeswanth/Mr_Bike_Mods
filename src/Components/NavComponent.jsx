import React, { useState, useEffect, useRef } from "react";
import "./navcomponent.css";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import HeaderComponent from "./HeaderComponent";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const scrollRef = useRef();
  const tweenRef = useRef();
  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
    tweenRef.current.pause(); // Pause the GSAP animation
  };

  const handleMouseLeave = () => {
    setOpenDropdown("");
    tweenRef.current.resume(); // Resume the GSAP animation
  };

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

  useEffect(() => {
    const el = scrollRef.current;
    const totalWidth = el.scrollWidth / 2;

    const tween = gsap.to(el, {
      x: -totalWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div className="bottom-nav">
        <div className="scrolling-container">
          <div className="scrolling-names" ref={scrollRef}>
            {[...mainMenu, ...mainMenu].map((item, index) => (
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
      </div>
    </div>
  );
};

export default Navbar;
