from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/api/hello')
def hello(): 
    return {'message': 'Hello from Python'}

if __name__ == '__main__':
    app.run()
