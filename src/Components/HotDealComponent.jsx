import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./IndividualProduct";
import "./hotdealcomponent.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
  {
    image:
      "https://www.shutterstock.com/shutterstock/photos/1924303841/display_1500/stock-vector-vector-illustration-of-motorbike-with-spares-design-1924303841.jpg",
    title: "Communication Device-Bluearmor C30",
    brand: "BLUE ARMOUR",
    price: "10,999.00",
    emi: 2750,
  },
  {
    image:
      "https://5.imimg.com/data5/WHATSAPP/Default/2024/12/476791541/BN/JU/QU/14110217/new-product-500x500.jpeg",
    title:
      "Aoocci C6 Pro All-in-One Motorcycle CarPlay System with GPS & Anti-Theft",
    brand: "AOOCCI",
    price: "18,299.00",
    originalPrice: "25,999.00",
    savePercent: 30,
    emi: 4575,
  },
  {
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/6/431139131/ED/GK/YW/41419325/product-jpeg-500x500.jpg",
    title: "HS1 Helmet Bluetooth Device",
    brand: "BLUE ARMOUR",
    price: "3,000.00",
    emi: 750,
  },
  {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/11/AQ/PG/KM/3174989/e-bike-testing-device-500x500.jpg",
    title: "Additional Helmet Kit-BlueArmor- C30",
    brand: "BLUE ARMOUR",
    price: "2,999.00",
    emi: 750,
  },
  {
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/6/431139131/ED/GK/YW/41419325/product-jpeg-500x500.jpg",
    title: "EJEAS Q8 MESH Motorcycle Intercom System",
    brand: "EJEAS",
    price: "6,499.00",
    originalPrice: "7,600.00",
    savePercent: 14,
    emi: 1625,
  },
  {
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/6/431139131/ED/GK/YW/41419325/product-jpeg-500x500.jpg",
    title: "Polish Exhaust For Gt 650/Interceptor 650-Redrooster Stellar",
    brand: "RED ROOSTER",
    price: "21,500.00",
    emi: 5375,
    isStartingPrice: true,
    showColorBox: true,
  },
];

const HotSellingProducts = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 1
    );
  };

  useEffect(() => {
    updateButtons();
    const container = scrollRef.current;
    container.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);
    return () => {
      container.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const itemWidth = container.children[0]?.offsetWidth || 300;
    const gap = 20; // same as CSS gap
    const scrollBy = itemWidth + gap;
    container.scrollBy({
      left: dir === "left" ? -scrollBy : scrollBy,
      behavior: "smooth",
    });
  };

  return (
    <div className="hot-selling-section">
      <div className="hot-header">
        <h2>HOT SELLING PRODUCTS!!</h2>
        <a href="#">View all</a>
      </div>

      <div className="scroll-wrapper">
        <button
          className="scroll-btn left"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <FaChevronLeft />
        </button>

        <div className="products-grid" ref={scrollRef}>
          {productData.map((product, index) => (
            <Link
              to={`/product/${index}`}
              key={index}
              state={{ product }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductCard {...product} />
            </Link>
          ))}
        </div>

        <button
          className="scroll-btn right"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HotSellingProducts;
