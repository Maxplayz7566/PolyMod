from flask import Flask, request
import requests
import os
from urllib.parse import urlencode

app = Flask(__name__)

def getCurseMods(queries):
    params = '?gameId=432'
    for queryKey, value in queries.items():
        params += f'&{queryKey}={value}'
    curseForgeMods = requests.get(f'https://api.curseforge.com/v1/mods/search{params}', headers={
        "x-api-key": os.getenv('curse_api_key')
        }).json()
    return curseForgeMods

@app.route('/api/getTopMods')
def getTopMods(): 
    modrinthMods = requests.get('https://api.modrinth.com/v2/search?limit=51').json()
    curseForgeMods = getCurseMods(
        {
            "classId": 6,
            "sortField": 6,
            "sortOrder": "desc",
            "pageSize": 50
        })
    mods = []
    for modrinthMod in modrinthMods['hits']:
        mods.append({
            'title': modrinthMod['title'],
            'author': modrinthMod['author'],
            'icon_url': modrinthMod['icon_url'],
            'link': f'https://modrinth.com/mod/{modrinthMod['slug']}',
            'platform': 'modrinth'
        })
    for curseMod in curseForgeMods['data']:
        mods.append({
            'title': curseMod['name'],
            'author': curseMod['authors'][0]['name'],
            'icon_url': curseMod['logo']['url'],
            'link': curseMod['links']['websiteUrl'],
            'platform': 'curse'
        })
    return mods

if __name__ == '__main__':
    app.run()