from flask import *
app = Flask(__name__)

@app.route('/')
def setCookie():
    res = make_response("Cookie is set")
    res.set_cookie('Flask','Framework')
    return res

if __name__ == '__main__':
    app.run(debug=True)