from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

# Initialize Flask
app = Flask(__name__)
CORS(app)   # Allow React to access API

# Load Model & Vectorizer
model = joblib.load("D:\Sentiment analysis\sentiment_model.pkl")
vectorizer = joblib.load(r"D:\Sentiment analysis\tfidf_vectorizer.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    text = data.get("text")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Transform text
    vector = vectorizer.transform([text])
    prediction = model.predict(vector)

    sentiment = "Positive 😊" if prediction[0] == 1 else "Negative 😔"

    return jsonify({
        "text": text,
        "sentiment": sentiment
    })

if __name__ == "__main__":
    app.run(debug=True)
