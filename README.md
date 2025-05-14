# Crop Recommendation System

This project is a **machine learning-based crop recommendation system** designed to assist farmers and agricultural experts in determining the most suitable crop to grow based on environmental and soil parameters.

The system takes input data such as:
- Soil nutrients: Nitrogen (N), Phosphorus (P), Potassium (K)
- Environmental conditions: Temperature, Humidity, pH, Rainfall

Based on this information, the system recommends the best crop to cultivate, helping improve crop yield and optimize resources.

## 🌾 Features

- Predicts the ideal crop based on environmental and soil conditions.
- Trained machine learning models (e.g., Random Forest, SVM) for accurate recommendations.
- User-friendly interface built with React.
- Flask backend to handle API requests and machine learning predictions.

## 🔧 Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Flask, Python
- **Machine Learning:** Scikit-learn, Pandas
- **Other Libraries:** Axios (for API calls)

## 🚀 Setup Instructions

### Backend (Flask)
1. Navigate to the `backend/` folder.
2. Set up a virtual environment:

```bash
python -m venv venv
source venv/bin/activate   # For Linux/macOS
venv\Scripts\activate      # For Windows
