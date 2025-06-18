import React from "react";
import "./categorygrid.css";

const categories = [
  { title: "HELMET", img: "helmet.jpg" },
  { title: "JACKET", img: "jacket.jpg" },
  { title: "HELMET ACCESSORIES", img: "helmet-accessories.jpg" },
  { title: "BLUETOOTH & INTERCOM", img: "bluetooth.jpg" },
  { title: "BOOTS", img: "boots.jpg" },
  { title: "GLOVES", img: "gloves.jpg" },
  { title: "AIR FILTERS", img: "air-filter.jpg" },
  { title: "BREAK PADS", img: "brake-pads.jpg" },
  { title: "CHAIN & SPROCKET", img: "chain.jpg" },
  { title: "SPARK PLUG", img: "spark-plug.jpg" },
  { title: "BAGS", img: "bags.jpg" },
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((cat, idx) => (
        <div className="category-card" key={idx}>
          <img
            src={`/images/${cat.img}`}
            alt={cat.title}
            className="category-img"
          />
          <div className="category-overlay">
            <h2>{cat.title}</h2>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
