// components/AddProduct.jsx
import React, { useRef, useEffect, useState } from "react";
import "./addproductpage.css";
import gsap from "gsap";

const AddProduct = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    image: "",
    description: "",
  });

  //   useEffect(() => {
  //     gsap.from(formRef.current, {
  //       opacity: 0,
  //       y: 30,
  //       duration: 0.6,
  //       ease: "power2.out",
  //     });
  //   }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", formData);
    alert("Product added successfully!");
    // You could reset the form or redirect here
  };

  return (
    <div className="add-product-container" ref={formRef}>
      <h2>Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Brand:</label>
        <input
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Image URL:</label>
        <input name="image" value={formData.image} onChange={handleChange} />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
