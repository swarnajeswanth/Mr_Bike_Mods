import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: {
    type: String,
    required: true,
  },
  price: Number,
  imageUrl: String,
  category: String,
  stock: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
