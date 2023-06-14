import numpy as np
from flask import Flask, request, jsonify, render_template
from model_module import PaperRecommendationModel
# import model as model_final

import joblib


if __name__ == "__main__":
    app = Flask(__name__)
    with open('paper_recommendation_model.joblib', 'rb') as f:
        model = joblib.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():

    features = [str(x) for x in request.form.values()]
    final_features = [np.array(features)]
    prediction = model.predict(final_features)

    output = prediction[0]

    return render_template('index.html', prediction_text='The predicted value is {}'.format(output))

@app.route('/predict_api',methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    # data = request.get_json(force=True)
    # prediction = model.predict([np.array(list(data.values()))])

    # output = prediction[0]
    # return jsonify(output)
    #return render_template('index.html', prediction_text='The predicted value is {}'.format(output))