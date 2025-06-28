import React, { useState, useEffect, useRef } from "react";
import "./navcomponent.css";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";

const mainMenu = [
  { label: "Shop By Bike", dropdown: ["KTM", "Royal Enfield", "Honda"] },
  { label: "Accessories" },
  { label: "Lubricants", dropdown: ["Engine Oil", "Coolant"] },
  { label: "Apparel", dropdown: ["Gloves", "Jackets"] },
  { label: "Performance Parts" },
  { label: "Weekly Offers" },
  { label: "Riding Gear" },
  { label: "Helmets" },
  { label: "Combo Deals" },
  { label: "Lighting Kits" },
  { label: "Bike Covers" },
  { label: "Mirrors" },
  { label: "Crash Guards" },
  { label: "Phone Holders" },
  { label: "Handlebars" },
  { label: "Braking Systems" },
  { label: "Foot Pegs" },
  { label: "Exhausts" },
  { label: "Stickers" },
  { label: "Seats" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const scrollRef = useRef();
  const tweenRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    const totalWidth = el.scrollWidth / 2;

    const tween = gsap.to(el, {
      x: -totalWidth,
      duration: 25,
      ease: "linear",
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  const handleMouseEnter = (label) => {
    setOpenDropdown(label);
    tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    tweenRef.current.resume();
  };

  return (
    <div className="navbar-container">
      <div className="scroll-wrapper">
        <div className="scrolling-menu" ref={scrollRef}>
          {[...mainMenu, ...mainMenu].map((item, index) => (
            <div
              key={index}
              className="menu-item"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                {item.label}
                {item.dropdown && <FaChevronDown className="chevron" />}
              </span>
              {openDropdown === item.label && item.dropdown && (
                <div className="dropdown">
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
  );
};

export default Navbar;
