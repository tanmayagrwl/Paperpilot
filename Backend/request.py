# import requests

# url = 'http://localhost:8000/predict_api'
# r = requests.post(url,json={'Deep'})

# print(r.json())

import requests

url = 'http://localhost:8000/predict'
r = requests.post(url, json={'features': 'Deep'})

print(r.json())
