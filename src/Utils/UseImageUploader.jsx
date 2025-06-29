import { useState } from "react";
import axios from "axios";

const useImageUpload = () => {
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError(null);

    axios
      .post("/api/upload", formData) // ✅ updated path
      .then((res) => {
        setUploadedUrl(res.data.url);
        setLoading(false);
      })
      .catch((err) => {
        setError("Upload failed!");
        setLoading(false);
        console.error("Upload error:", err);
      });
  };

  return {
    uploadedUrl,
    loading,
    error,
    handleFileChange,
  };
};

export default useImageUpload;
