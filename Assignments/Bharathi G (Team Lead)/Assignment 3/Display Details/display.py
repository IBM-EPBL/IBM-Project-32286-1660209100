from flask import Flask,render_template,request
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('details.html')

@app.route('/display',methods=['POST'])
def display():
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    str = "Name : "+name+"<br>Email : "+email+"<br>Phone : "+phone
    return str

if __name__=='__main__':
    app.run(debug=True)