from flask import Flask,request,render_template
from werkzeug.utils import secure_filename
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('resume.html')

@app.route('/upload',methods=['POST'])
def fileUpload():
    f = request.files['file']
    f.save(secure_filename(f.filename))
    return "File Uploaded Successfully"

if __name__=='__main__':
    app.run(debug=True)