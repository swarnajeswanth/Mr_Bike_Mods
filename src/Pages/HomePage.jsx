import React from "react";
import Navbar from "../Components/NavComponent";
import HotSellingProducts from "../Components/HotDealComponent";
import NewArrivals from "../Components/NewArrivals";
import CategoryGrid from "../Components/CategoryGrid";
import Footer from "../Components/Footer";
import StoreDetails from "../Components/StoreDetails";
import ProductReviews from "../Components/ProductReviews";
import newArrival from "../assets/NewArrivals.png";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HotSellingProducts />
      <NewArrivals />
      <CategoryGrid />
      <ProductReviews />
      <StoreDetails />
      <Footer />
    </div>
  );
};

export default HomePage;
