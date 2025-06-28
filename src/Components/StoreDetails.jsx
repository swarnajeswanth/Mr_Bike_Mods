import React from "react";
import "./storedetails.css";

const StoreDetails = () => {
  return (
    <div className="store-section">
      <h2>Our Store</h2>
      <div className="store-container">
        {/* Left Panel - Store Info */}
        <div className="store-info">
          <h3>Store - Nellore, Andhra Pradesh</h3>
          <p>
            Manikant, 73, 100 Feet Ring Rd, BTM 2nd Stage, Bengaluru,
            <br />
            Nellore 524003, India
          </p>
          <p>Monday - Sunday : 10 AM - 9 PM</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3863.6441945144543!2d79.97575337510325!3d14.44765718602077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDI2JzUxLjYiTiA3OcKwNTgnNDIuMCJF!5e0!3m2!1sen!2sin!4v1751128807784!5m2!1sen!2sin"
            style={{
              width: "400px",
              height: "250px",
              border: "0",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Panel - Image */}
        <div
          className="store-image"
          style={{
            backgroundImage:
              'url("https://sdmntprwestus2.oaiusercontent.com/files/00000000-4f68-61f8-9ba6-661d890b6f95/raw?se=2025-06-28T14%3A06%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=81f80cba-eb3d-5811-a517-d09c72f9e9c4&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-27T21%3A11%3A50Z&ske=2025-06-28T21%3A11%3A50Z&sks=b&skv=2024-08-04&sig=N0YU6HtqmluyQAASXUqwSSQ181E72JPdm0uOxNeQBt4%3D")',
            objectFit: "contain",
            backgroundSize: "cover",
          }}
        >
          {/* <img
            src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-38c4-61f8-9af2-4a8bbdef4490/raw?se=2025-06-28T13%3A57%3A17Z&sp=r&sv=2024-08-04&sr=b&scid=78a7259e-f3ed-51c4-b76e-ec6852911bd8&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-28T12%3A45%3A58Z&ske=2025-06-29T12%3A45%3A58Z&sks=b&skv=2024-08-04&sig=muaLaQ6LekJZrt1KY%2BaqvMJQmZMFB/X8sEzwZrFplyI%3D"
            style={{
              width: "80%",
              height: "50%",
              border: "1px solid #ccc",
              objectFit: "contain",
            }}
            alt="Store Interior"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
