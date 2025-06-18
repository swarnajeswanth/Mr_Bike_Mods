import React, { useState } from "react";
import "./ProductReviews.css";

const ProductReviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 4,
      comment: "Great product! Fits perfectly and is durable.",
    },
    {
      name: "Priya S",
      rating: 5,
      comment: "Highly recommend! Quality is top notch.",
    },
  ]);

  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;

    setReviews([...reviews, form]);
    setForm({ name: "", rating: 5, comment: "" });
  };

  return (
    <div className="reviews-section">
      <h2>User Experience & Reviews</h2>

      {/* Existing Reviews */}
      <div className="review-list">
        {reviews.map((rev, idx) => (
          <div className="review-card" key={idx}>
            <h4>{rev.name}</h4>
            <div className="stars">
              {"★".repeat(rev.rating)}
              {"☆".repeat(5 - rev.rating)}
            </div>
            <p>{rev.comment}</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <select name="rating" value={form.rating} onChange={handleChange}>
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} Star{r > 1 ? "s" : ""}
              </option>
            ))}
          </select>
          <textarea
            name="comment"
            placeholder="Your experience..."
            rows="4"
            value={form.comment}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
