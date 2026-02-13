import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!text) return;

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        text: text,
      });

      setSentiment(response.data.sentiment);
    } catch (error) {
      alert("Error connecting to backend");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>💬 Sentiment Analysis App</h1>

      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handlePredict}>
        {loading ? "Analyzing..." : "Analyze Sentiment"}
      </button>

      {sentiment && (
        <div className="result">
          <h2>Prediction:</h2>
          <p>{sentiment}</p>
        </div>
      )}
    </div>
  );
}

export default App;
