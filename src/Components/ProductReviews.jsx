import React, { useEffect, useState } from "react";
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
    {
      name: "Amit R",
      rating: 4,
      comment: "Good performance and value for money.",
    },
  ]);

  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Looping animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit a new review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;

    setReviews((prev) => [...prev, form]);
    setForm({ name: "", rating: 5, comment: "" });
  };

  return (
    <div className="reviews-section">
      <h2>User Experience & Reviews</h2>

      {/* Visible rotating reviews */}
      <div className="review-list">
        {[0, 1].map((offset) => {
          const index = (currentIndex + offset) % reviews.length;
          const rev = reviews[index];
          return (
            <div className="review-card animated" key={index}>
              <h4>{rev.name}</h4>
              <div className="stars">
                {"★".repeat(rev.rating)}
                {"☆".repeat(5 - rev.rating)}
              </div>
              <p>{rev.comment}</p>
            </div>
          );
        })}
      </div>

      {/* Review form */}
      <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
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
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
