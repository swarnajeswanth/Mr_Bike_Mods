import React, { useRef, useState, useEffect } from "react";
import "./addproductpage.css";
import gsap from "gsap";
import useImageUpload from "../Utils/UseImageUploader"; // Import your custom hook
import axios from "axios";
const AddProduct = () => {
  const formRef = useRef(null);
  const [file, setFile] = useState(null); // For storing the selected file
  const [preview, setPreview] = useState(null); // For displaying image preview
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    image: "",
    description: "",
  });

  // Use the custom hook for image upload functionality
  const { uploadedUrl, loading, error, handleFileChange } = useImageUpload();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/files")
      .then((res) => {
        console.log("Fetched files:", res.data);
        setImages(res.data || []);
      })
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image file.");
      return;
    }

    try {
      // 1. Upload image to ImageKit
      const formDataUpload = new FormData();
      formDataUpload.append("file", file);

      const uploadRes = await axios.post("/api/upload", formDataUpload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const uploadedUrl = uploadRes.data.url;
      if (!uploadedUrl) {
        alert("Image upload failed.");
        return;
      }

      // 2. Submit product data to backend
      const payload = {
        title: formData.title,
        brand: formData.brand,
        price: formData.price,
        description: formData.description,
        imageUrl: uploadedUrl,
        stock: 10,
        isAvailable: true,
        rating: 0,
        category: "General",
      };

      const res = await axios.post("/api/add-product", payload);
      console.log("Product added:", res);
      alert("Product added successfully!");

      // 3. Optionally reset form
      setFormData({
        title: "",
        brand: "",
        price: "",
        image: "",
        description: "",
      });
      setFile(null);
      setPreview(null);
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to add product.");
    }
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
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
          }}
          required
        />

        {/* Show image preview if available */}
        {preview && <img src={preview} alt="Preview" width="200" />}
        {/* Display loading spinner while uploading */}
        {loading && <p>Uploading...</p>}
        {/* Show error message if upload fails */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* Once image is uploaded, show the uploaded URL */}
        {uploadedUrl && (
          <div>
            <h3>Uploaded Image:</h3>
            <img src={uploadedUrl} alt="Uploaded" width="300" />
            <p>Image URL: {uploadedUrl}</p>
          </div>
        )}
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {Array.isArray(images) &&
          images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img.url}
                alt={img.name}
                style={{ width: 200, borderRadius: 8 }}
              />
              <p>{img.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddProduct;
