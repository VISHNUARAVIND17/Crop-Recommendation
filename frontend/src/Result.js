  import React from "react";

  function Result({ crop }) {
    const cropEmojis = {
      rice: "🍚",
      wheat: "🌾",
      maize: "🌽",
      sugarcane: "🍬",
      cotton: "👕",
      banana: "🍌",
      mango: "🥭",
      apple: "🍎",
      coconut: "🥥",
      orange: "🍊",
      coffee: "☕",
      tea: "🍵",
      grapes: "🍇",
      watermelon: "🍉",
      lentil: "🥣",
      default: "🌱",
    };

    const emoji = cropEmojis[crop.toLowerCase()] || cropEmojis.default;

    const styles = {
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "2rem",
      },
      resultBox: {
        padding: "1rem",
        fontWeight: "bold",
        fontSize: "1.5rem",
        textAlign: "center",
        borderRadius: "0.8rem",
        backgroundColor: "#f0f8ff",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        cursor: "pointer",
      },
      resultText: {
        color: "#27ae60",
      },
      hoverEffect: {
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: "#e0f7fa",
        },
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.resultBox} className="hover-effect">
          <span style={styles.resultText}>
            Recommended Crop:  {crop} {emoji}
          </span>
        </div>
      </div>
    );
  }

  export default Result;
