import React, { useState } from "react";
import axios from "axios";

function CropForm({ setResult }) {
  const [formData, setFormData] = useState({
    N: 50,
    P: 50,
    K: 50,
    ph: 7.0,
    model: "logistic",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "ph" ? parseFloat(value) : parseInt(value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setResult(response.data.predicted_crop);
    } catch (err) {
      alert("Prediction failed. Please try again.");
      console.error(err);
    }
  };

  const styles = {
    page: {
      height: "100vh", // Take full height of the screen
      background: "#f5f5f5", // Subtle background color
      fontFamily: "'Poppins', sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Center content vertically
      alignItems: "center", // Center content horizontally
      padding: "1rem",
    },
    container: {
      padding: "1.5rem", // Reduced padding for a compact look
      maxWidth: "500px", // Smaller max width
      width: "100%",
      background: "#ffffff", // White background for form
      borderRadius: "1rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)", // Subtle shadow
      position: "relative", // Ensure footer does not overlap
    },
    header: {
      textAlign: "center",
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "1.5rem",
    },
    inputGroup: {
      marginBottom: "1rem", // Reduced bottom margin for inputs
    },
    label: {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "600",
      color: "#34495e",
      marginBottom: "0.5rem",
    },
    slider: {
      width: "100%",
    },
    select: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "0.5rem",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      backgroundColor: "#27ae60",
      color: "white",
      padding: "0.75rem",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
    },
    footer: {
      textAlign: "center",
      padding: "1rem",
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>🌱 Smart Crop Recommendation</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Nitrogen (N): <span>{formData.N}</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              name="N"
              value={formData.N}
              onChange={handleChange}
              style={styles.slider}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Phosphorus (P): <span>{formData.P}</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              name="P"
              value={formData.P}
              onChange={handleChange}
              style={styles.slider}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Potassium (K): <span>{formData.K}</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              name="K"
              value={formData.K}
              onChange={handleChange}
              style={styles.slider}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              pH Level: <span>{formData.ph.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0.0"
              max="14.0"
              step="0.1"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
              style={styles.slider}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Model:</label>
            <select name="model" value={formData.model} onChange={handleChange} style={styles.select}>
              <option value="logistic">Logistic Regression</option>
              <option value="random_forest">Random Forest</option>
            </select>
          </div>

          <button type="submit" style={styles.button}>
            🔍 Predict Crop
          </button>
        </form>
      </div>
    </div>
  );
}

export default CropForm;
