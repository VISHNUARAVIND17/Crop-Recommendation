import joblib
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pandas as pd

# Load data
df = pd.read_csv("soil_measures.csv")
X = df[["N", "P", "K", "ph"]]
y = df["crop"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Logistic Regression
log_model = LogisticRegression(max_iter=2000, multi_class="multinomial")
log_model.fit(X_train, y_train)
joblib.dump(log_model, "models/logistic_model.pkl")

# Random Forest
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)
joblib.dump(rf_model, "models/random_forest_model.pkl")
