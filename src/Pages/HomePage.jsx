import React from "react";
import Navbar from "../Components/NavComponent";
import HotSellingProducts from "../Components/HotDealComponent";
import NewArrivals from "../Components/NewArrivals";
import CategoryGrid from "../Components/CategoryGrid";
import Footer from "../Components/Footer";
import StoreDetails from "../Components/StoreDetails";
import ProductReviews from "../Components/ProductReviews";
import Main from "../assets/Main.png"; // Assuming you have a CSS file for styling
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="main-banner"
        style={{
          backgroundImage: `url(${Main})`,
          opacity: 0.9,
          width: "80%",
          height: "400px",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "10px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          Welcome to Our Store
        </h1>
        <p
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            fontSize: "13px",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          Discover the best products at unbeatable prices!
        </p>
      </div>
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
