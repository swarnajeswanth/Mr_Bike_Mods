import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import multer from "multer";
import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const upload = multer();
app.use(cors());
app.use(express.json());

const imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_API_KEY,
  privateKey: process.env.PRIVATE_API_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

// Upload endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const result = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
    });
    res.json({ url: result.url });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// List all files (paginated)
app.get("/allfiles", async (req, res) => {
  try {
    const response = await imagekit.listFiles({ limit: 10 });
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch image list" });
  }
});

// List files by folder path
app.get("/files", async (req, res) => {
  const folderPath = req.query.path || "/";
  try {
    const result = await imagekit.listFiles({ path: folderPath, limit: 20 });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch files" });
  }
});

export const handler = serverless(app);
