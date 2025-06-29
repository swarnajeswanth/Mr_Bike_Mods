import React from "react";
import Navbar from "../Components/NavComponent";
import HotSellingProducts from "../Components/HotDealComponent";
import NewArrivals from "../Components/NewArrivals";
import CategoryGrid from "../Components/CategoryGrid";
import Footer from "../Components/Footer";
import StoreDetails from "../Components/StoreDetails";
import ProductReviews from "../Components/ProductReviews";
import Main from "../assets/Main.png"; // Assuming you have a CSS file for styling
import "../index.css";
import HighlightSection from "../Components/HighlightSection";
import HeaderComponent from "../Components/HeaderComponent";
import { toast, Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <div style={{ position: "relative", zIndex: 50 }}>
      <HeaderComponent />
      <Navbar />
      <HighlightSection />
      <HotSellingProducts />
      {/* <NewArrivals /> */}
      <CategoryGrid />
      <ProductReviews />
      <StoreDetails />
      <Footer />
    </div>
  );
};

export default HomePage;
