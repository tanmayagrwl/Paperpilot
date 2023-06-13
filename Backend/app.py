import numpy as np
from flask import Flask, request, jsonify, render_template
# import pickle
# import model as model_final

import joblib



app = Flask(__name__)
model = joblib.load('Backend/paper_recommendation_model.joblib')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():

    features = [str(x) for x in request.form.values()]
    final_features = [np.array(features)]
    prediction = model.predict(final_features)

    output = round(prediction[0], 2)

    return render_template('index.html', prediction_text='The predicted value is {}'.format(output))