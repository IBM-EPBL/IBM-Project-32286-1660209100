import re

from flask import Flask,render_template,request,session,redirect
import ibm_db


app=Flask(__name__)

###------------------------------------------sessions------------------------------
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"

##---------------Database----------------------------------------------
app.secret_key = 'a'
app.config['database'] = 'bludb'
app.config['hostname'] = '3883e7e4-18f5-4afe-be8c-fa31c41761d2.bs2io90l08kqb1od8lcg.databases.appdomain.cloud'
app.config['port'] = '31498'
app.config['protocol'] = 'tcpip'
app.config['uid'] = 'qpb00081'
app.config['pwd'] = 'IpFP5gUz8LePPiCu'
app.config['security'] = 'SSL'


conn_str = 'database=bludb;hostname=3883e7e4-18f5-4afe-be8c-fa31c41761d2.bs2io90l08kqb1od8lcg.databases.appdomain.cloud;port=31498;protocol=tcpip;\
            uid=qpb00081;pwd=IpFP5gUz8LePPiCu;security=SSL'
conn = ibm_db.connect(conn_str, '', '')


#-----------------------routing--------------------------------------------------
@app.route('/')
def home():
    session['name'] = ''
    session['email'] = ''
    session['apply'] = False
    session['title'] = ''
    session['skills'] = ''
    session['company'] = ''
    session['msg'] = ''
    session['title'] = ''
    session['skills'] = ''
    session['regmsg'] = ''
    return render_template('home.html')

@app.route('/apply',methods=['POST'])
def apply():
    session['apply']= True
    session['title'] = request.form['title']
    session['skills'] = request.form['skill']
    session['company'] = request.form['company']
    if(session['name']==''):
        session['msg'] = "Please login before applying job."
        return render_template('login.html')
    return render_template('apply.html')

@app.route('/viewjobs')
def viewjobs():
    session['title'] = ''
    session['skills'] = ''
    session['msg'] = ''
    session['regmsg'] = ''
    sql = "select * from jobs"
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.execute(stmt)
    values = ibm_db.fetch_assoc(stmt)
    result = ''
    while values != False:
        result += '<div class="card" style="width:20rem">'
        result += '<form action="apply" class="card-body" method="post">'
        result += '<input class="card-title title" name="title" value="' + values['ROLE'] + '">'
        result += '<input class="card-text company" name="company" value="' + values['COMPANY'] + '"><br>'
        result += '<input class="card-text skills" name="skill" value="' + values['SKILLS'] + '"><br>'
        result += '<input type="submit" value="Apply" class="btn btn-primary"></form></div> '
        values = ibm_db.fetch_assoc(stmt)
    session['result'] = result
    if session['name'] == '':
        return render_template('viewJob.html')
    return render_template('viewafterlogin.html')


@app.route('/login')
def login():
    session['apply']= False
    return render_template('login.html')

@app.route('/register',methods=['POST','GET'])
def register():
    if request.method == 'GET':
        return render_template('register.html')
    name = request.form['name']
    email = request.form['email']
    password = request.form['password']
    # ----------- tablename = jobregister=----------------
    sql="SELECT * FROM jobregister WHERE name=? "
    stmt=ibm_db.prepare(conn,sql)
    ibm_db.bind_param(stmt,1,name)
    ibm_db.execute(stmt)
    account =ibm_db.fetch_assoc(stmt)
    if account:
        msg='Account already exists !'
        return render_template('register.html',msg=msg)
    elif not re.match(r'[^@]+@[^@]+\.[^@]+',email):
        msg='Invalid email Address'
        return render_template('register.html',msg=msg)
    elif not re.match(r'[A-Za-z0-9]+',name):
        msg='Name must contain atleast one character and Number'
        return render_template('register.html',msg=msg)
    else:
        # ----------- tablename = jobregister=----------------
        sql = 'INSERT INTO jobregister values(?,?,?)'
        prepare_stmt = ibm_db.prepare(conn,sql)
        ibm_db.bind_param(prepare_stmt,1,name)
        ibm_db.bind_param(prepare_stmt,2,email)
        ibm_db.bind_param(prepare_stmt,3,password)
        ibm_db.execute(prepare_stmt)
        session['msg']='Registration successful'
        return render_template('login.html')


@app.route('/welcome',methods=['POST','GET'])
def welcome():
    if request.method == 'GET':
        return render_template('welcome.html')
    email = request.form['email']
    password = request.form['password']
    #---------table name = jobregister -----------------------
    sql = "select name from jobregister where email=? AND password=?"
    prep_stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(prep_stmt, 1, email)
    ibm_db.bind_param(prep_stmt, 2, password)
    ibm_db.execute(prep_stmt)
    values = ibm_db.fetch_assoc(prep_stmt)
    if values:
        session['name'] = values['NAME']
        session['email'] = email
        if session['apply']:
            return render_template('apply.html')
        return render_template("welcome.html")
    else:
        session['msg'] = "Incorrect email or password"
        return redirect("/login")


if __name__ == '__main__':
    app.run(debug=True)