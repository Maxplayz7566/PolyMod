from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/api/getTopMods')
def hello(): 
    return requests.get('https://api.modrinth.com/v2/search').json()

if __name__ == '__main__':
    app.run()
