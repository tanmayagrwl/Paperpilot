import numpy as np
from flask import Flask, request, jsonify, render_template
from model_module import PaperRecommendationModel
# import model as model_final

import joblib

app = Flask(__name__)
if __name__ == "__main__":
    app.run(debug=True)
    with open('paper_recommendation_model.joblib', 'rb') as f:
        model = joblib.load(f)


@app.route('/')
def home():
    return {
        "success": True,
        "message": "welcome to the api"
    }


@app.route('/predict', methods=['POST'])
def predict():
    interests = request.json.get('interests')

    # with open('paper_recommendation_model.joblib', 'rb') as f:
    #     model = joblib.load(f)

    # # Use the `model` variable for prediction
    # prediction = model.predict(interests)

    print(interests)

    return {
        "success": True,
        "interests": f'The predicted value is {prediction}'
    }


@app.route('/predict_api', methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    # data = request.get_json(force=True)
    # prediction = model.predict([np.array(list(data.values()))])

    # output = prediction[0]
    # return jsonify(output)
    # return render_template('index.html', prediction_text='The predicted value is {}'.format(output))
