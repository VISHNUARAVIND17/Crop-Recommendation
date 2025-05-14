import React, { useState } from "react";
import CropForm from "./CropForm";
import Result from "./Result";

function App() {
  const [result, setResult] = useState(null);

  const styles = {
    header: {
      backgroundColor: "#2ecc71",
      padding: "1.5rem",
      textAlign: "center",
      color: "white",
      fontSize: "2rem",
      fontWeight: "bold",
      borderRadius: "0 0 1rem 1rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    appContainer: {
      backgroundColor: "#f4fdf6",
      minHeight: "100vh",
      padding: "2rem",
    },
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
      🌽 Smart Crop Recommendation System
      </header>
      <CropForm setResult={setResult} />
      {result && <Result crop={result} />}
    </div>
  );
}

export default App;
