import express from "express";
import serverless from "serverless-http";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import Product from "./Product.js";
import { connectDB } from "./db.js";

dotenv.config();
const app = express();
// app.use((req, res, next) => {
//   console.log(`[API HIT] ${req.method} ${req.path}`);
//   next();
// });

app.use(cors());
app.use(express.json());
const upload = multer();

const imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_API_KEY,
  privateKey: process.env.PRIVATE_API_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

// Add product endpoint
// app.post("/api/add-product", async (req, res) => {
//   try {
//     await connectDB();

//     console.log("Received data:", req.body); // ✅ Log the payload

//     const {
//       title,
//       brand,
//       price,
//       description,
//       imageUrl,
//       category,
//       stock,
//       isAvailable,
//       rating,
//     } = req.body;

//     // Validate essential fields
//     // if (!title || !brand || !price || !description || !imageUrl) {
//     //   console.error("Missing required fields");
//     //   return res.status(400).json({ error: "Missing required fields" });
//     // }

//     const newProduct = new Product({
//       name: title,
//       Brand: brand,
//       price,
//       description,
//       imageUrl,
//       category,
//       stock,
//       isAvailable,
//       rating,
//     });
//     console.log("New product object:", newProduct); // ✅ Log the product object
//     const saved = await newProduct.save();
//     console.log("Product saved:", saved);

//     res.json({ message: "Product saved", product: saved });
//   } catch (err) {
//     console.error("❌ Error saving product:", err);
//     res.status(500).json({ error: "Failed to save product" });
//   }
// });

app.post("/api/add-product", upload.none(), async (req, res) => {
  try {
    console.log("➡️ Received body:", req.body); // Log the incoming request body
    await connectDB();
    console.log("✅ MongoDB connected");

    const {
      title,
      brand,
      price,
      description,
      imageUrl,
      category,
      stock,
      isAvailable,
      rating,
    } = req.body;

    // Validate essential fields
    console.log(req.apiGateway.body);
    console.log(title);
    console.log(brand);
    console.log(price);
    console.log(description);
    console.log(imageUrl);
    if (!title || !brand || !price || !description || !imageUrl) {
      console.error("❌ Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newProduct = new Product({
      name: title,
      brand,
      price,
      description,
      imageUrl,
      category,
      stock,
      isAvailable,
      rating,
    });

    const saved = await newProduct.save();
    console.log("✅ Product saved:", saved);

    res.json({ message: "Product saved", product: saved });
  } catch (err) {
    console.error("❌ Server error:", err);
    res
      .status(500)
      .json({ error: "Failed to save product", reason: err.message });
  }
});

// app.post("/api/add-product", async (req, res) => {
//   try {
//     await connectDB();
//     res.json({ message: "DB connected successfully" });
//   } catch (err) {
//     console.error("DB connection failed:", err);
//     res.status(500).json({ error: "MongoDB connection failed" });
//   }
// });

// Fetch all products endpoint
app.get("/products", async (req, res) => {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
    });
    res.json({ url: result.url });
  } catch (err) {
    res.status(500).json({ error: "Upload failed" });
  }
});

app.get("/api/files", async (req, res) => {
  console.log("Fetching files with path:", req.query);
  try {
    const result = await imagekit.listFiles({
      // path: req.query.path || "/",
      limit: 20,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch files" });
  }
});

app.get("/api/allfiles", async (req, res) => {
  try {
    const result = await imagekit.listFiles({ limit: 10 });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch all files" });
  }
});
app.get("/", (req, res) => {
  res.send("API root working");
});

export const handler = serverless(app);
