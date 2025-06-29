import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: {
    type: String,
    required: true,
  },
  price: Number,
  imageUrl: String,
  category: {
    type: String,
    default: "",
    required: false,
  },
  stock: {
    type: Number,
    required: false,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    required: false,
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
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
