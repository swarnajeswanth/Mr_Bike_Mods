import express from "express";
import serverless from "serverless-http";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import ImageKit from "imagekit";

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

app.post("/upload", upload.single("file"), async (req, res) => {
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
