from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Load and prepare data
crops = pd.read_csv("soil_measures.csv")
features = ['N', 'P', 'K', 'ph']
target = 'crop'
X = crops[features]
y = crops[target]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train models
logistic_model = LogisticRegression(max_iter=2000, multi_class='multinomial')
logistic_model.fit(X_train, y_train)

rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# Initialize Flask
app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    
    model_type = data.get("model")
    if model_type not in ["logistic", "random_forest"]:
        return jsonify({"error": "Invalid model selected"}), 400

    try:
        # Prepare input
        soil_data = pd.DataFrame([{
            "N": data["N"],
            "P": data["P"],
            "K": data["K"],
            "ph": data["ph"]
        }])

        # Make prediction
        if model_type == "logistic":
            prediction = logistic_model.predict(soil_data)[0]
        else:
            prediction = rf_model.predict(soil_data)[0]

        return jsonify({"predicted_crop": prediction})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
