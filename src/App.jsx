import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
// import Shop from "./Pages/CartPage";
import LoginSignup from "./Pages/AuthPage";
import RetailerDashboard from "./Components/Dashboard/RetailerDashboard";
import CustomerDashboard from "./Components/Dashboard/CustomerDashboard";
import SingleProductPage from "./Components/SingleProductPage";
import AddProduct from "./Components/AddProductPage";
import CartContainer from "./Components/CartPage";
import store from "./redux/Bikestore.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/retailer-profile" element={<RetailerDashboard />} />
        <Route path="/customer-profile" element={<CustomerDashboard />} />
        <Route path="/product/:title" element={<SingleProductPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<CartContainer />} />
        {/* <Route path="/imageupload" element={<ImageUploader />} /> */}
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  );
};

export default App;
