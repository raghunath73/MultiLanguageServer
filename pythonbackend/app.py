from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/python-api')
def python_response():
    return jsonify(message="Hello from Python backend!")

if __name__ == '__main__':
    app.run(port=5001)
