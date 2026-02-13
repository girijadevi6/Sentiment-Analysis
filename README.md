
# 💬 Sentiment Analysis Web Application

This project is a full-stack Machine Learning web application that predicts whether a given text expresses **Positive or Negative sentiment**.

It integrates:

* Python for Machine Learning
* Natural Language Processing (NLP) techniques
* Support Vector Machine (SVM) classifier
* Flask REST API for backend
* React for frontend user interface

The system takes user input text and returns a real-time sentiment prediction through a web interface.


# 📂 Project Architecture

The project is structured into two main components:

### 1️⃣ Backend

* Loads trained model and vectorizer
* Exposes REST API endpoint
* Handles prediction requests
* Returns JSON response

### 2️⃣ Frontend

* Collects user input
* Sends request to backend
* Displays prediction result dynamically
* Provides responsive and modern UI

---

# 📊 Dataset

The model is trained using the Twitter Sentiment Analysis dataset containing 1.6 million tweets.

Each record contains:

* Sentiment label (0 = Negative, 4 = Positive)
* Tweet text
* Additional metadata (ID, date, user, etc.)

For this project, only the **text** and **sentiment label** are used.

This dataset provides large-scale real-world sentiment data, making the model robust and generalizable.

---

# 🧹 Text Preprocessing

Raw tweets contain noise such as:

* URLs
* User mentions (@username)
* Hashtags
* Special characters
* Emojis
* Mixed casing

To improve model performance, the following preprocessing steps are applied:

* Convert text to lowercase
* Remove URLs and mentions
* Remove hashtags and special symbols
* Tokenize text into words
* Apply stemming to reduce words to root form

Example transformation:

“I am Loving this Product!!! 😍”
→ “love product”

This cleaning ensures consistent and meaningful input for the model.

---

# 🔢 Feature Engineering (TF-IDF)

Machine learning models cannot directly understand text.
Therefore, text must be converted into numerical form.

This project uses **TF-IDF (Term Frequency – Inverse Document Frequency)**.

TF-IDF:

* Measures how important a word is in a document
* Reduces the impact of very common words
* Highlights unique and meaningful terms

Both:

* Single words (unigrams)
* Two-word combinations (bigrams)

are used to capture better context (e.g., “very good”, “not happy”).

This improves classification accuracy significantly.

---

# 🤖 Model Development

The algorithm used is:

**Linear Support Vector Machine (Linear SVM)**

Why SVM?

* Performs very well on high-dimensional text data
* Effective for binary classification
* Works efficiently on large datasets
* Provides strong generalization performance

The dataset is split into:

* 80% Training Data
* 20% Testing Data

Balanced class weighting is used to prevent bias toward any particular class.

---

# 📈 Model Evaluation

Model performance is evaluated using:

* Accuracy: 85%
  
These metrics ensure that the model performs well for both positive and negative sentiments.

---

# 💾 Model Saving

After training, the following components are saved:

* Trained SVM model
* TF-IDF vectorizer

Saving these allows:

* Faster deployment
* No need to retrain each time
* Easy integration with backend API

---

# 🌐 Backend Development – Flask REST API

The backend is built using Flask.

Its responsibilities include:

1. Loading the saved model and vectorizer
2. Receiving user input via HTTP request
3. Converting input text into TF-IDF vector format
4. Running prediction using the trained model
5. Returning sentiment result in JSON format

The API uses the POST method because:

* User input is sent to server
* Text length may be large
* Data should not appear in the URL
* It follows REST API best practices for processing requests

Backend Flow:

User Input → API → Vectorization → Prediction → JSON Response

---

# ⚛️ Frontend Development – React

The frontend is built using React.

Its responsibilities include:

* Providing a clean and interactive user interface
* Collecting user input through a textarea
* Sending asynchronous request to backend
* Displaying prediction result dynamically
* Showing loading state while prediction is in progress

The interface is designed with:

* Gradient background
* Card-style layout
* Responsive design
* Clear prediction display

---

# 🔄 Complete System Flow

Dataset
↓
Text Cleaning & Preprocessing
↓
TF-IDF Feature Extraction
↓
SVM Model Training
↓
Model Evaluation
↓
Model Saved
↓
Flask Backend Loads Model
↓
React Frontend Sends Input
↓
Backend Predicts Sentiment
↓
Result Displayed to User

---

# 📌 Technologies Used

Machine Learning:

* Scikit-learn
* NLTK

Backend:

* Flask
* Flask-CORS

Frontend:

* React
* Axios

Model Storage:

* Joblib

---

# 🎯 Key Concepts Demonstrated

This project demonstrates understanding of:

* Natural Language Processing
* Text vectorization techniques
* Supervised machine learning
* Support Vector Machines
* REST API development
* Frontend–backend communication
* Full-stack application integration
* Model deployment workflow

---

# 📊 Example

Input:
“I am very happy today”

Output:
Positive 😊

---

# 🚀 How to Run

Backend:

* Install required Python dependencies
* Start Flask server

Frontend:

* Install Node dependencies
* Start React development server

Both must run simultaneously to enable full communication.

---
# 🏁 Conclusion

This project demonstrates how to build a complete, production-style, end-to-end Machine Learning web application.

It successfully integrates:

* Data preprocessing
* Feature engineering
* Model training
* REST API backend
* Modern frontend interface
# Sample Output
<img width="1417" height="813" alt="image" src="https://github.com/user-attachments/assets/6d8f0f9a-cd24-4f32-aaa0-b5fffff2d346" />

