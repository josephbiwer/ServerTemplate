import requests

res = requests.get('http://localhost:5000/ping')

print(f'res data: {res}')
