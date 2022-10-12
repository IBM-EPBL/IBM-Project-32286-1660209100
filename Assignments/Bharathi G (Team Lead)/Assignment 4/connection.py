import ibm_db

hostname="764264db-9824-4b7c-82df-40d1b13897c2.bs2io90l08kqb1od8lcg.databases.appdomain.cloud"
uid="xwl60917"
pwd="07oTqMW5aEHHUiAK"
driver="{IBM DB2 ODBC DRIVER}"
db="bludb"
port="32536"
protocol="TCPIP"
cert = "Certificate.crt"

dsn =(
    "DATABASE={0};"
    "HOSTNAME={1};"
    "PORT={2};"
    "UID={3};"
    "PWD={4};"

).format(db,hostname,port,uid,pwd)
print(dsn)
try:
    db2=ibm_db.connect(dsn,"","")
    print("Connected to database ")
except:
    print("Unable to connect ",ibm_db.conn_errormsg())