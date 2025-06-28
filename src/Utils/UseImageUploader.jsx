import { useState } from "react";
import axios from "axios";

const useImageUpload = () => {
  // For displaying image preview
  const [uploadedUrl, setUploadedUrl] = useState(""); // For storing uploaded image URL
  const [loading, setLoading] = useState(false); // For loading state during upload
  const [error, setError] = useState(null); // For handling errors

  const handleFileChange = (f) => {
    console.log("File selected:", f); // Log the selected file
    const file = f;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true); // Start loading

    // Upload the file
    axios
      .post("http://localhost:4000/upload", formData)
      .then((res) => {
        setUploadedUrl(res.data.url); // Set the uploaded URL
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError("Upload failed!"); // Handle error
        setLoading(false); // Stop loading
        console.error(err);
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
