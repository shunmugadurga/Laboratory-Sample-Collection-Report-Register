import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier

# Load dataset
data = pd.read_csv("dataset.csv")

# Convert text values into numbers
encoder = LabelEncoder()

data["test_name"] = encoder.fit_transform(data["test_name"])
data["status"] = encoder.fit_transform(data["status"])
data["delay_risk"] = encoder.fit_transform(data["delay_risk"])

# Input (Features)
X = data[["test_name", "pending_days", "status"]]

# Output (Target)
y = data["delay_risk"]

# Train AI Model
model = DecisionTreeClassifier()
model.fit(X, y)

print("AI Model Trained Successfully!")

# Example Prediction
sample = [[0, 5, 1]]   # Blood Test, 5 days, Pending

prediction = model.predict(sample)

if prediction[0] == 0:
    print("Predicted Delay Risk: High")
else:
    print("Predicted Delay Risk: Low")