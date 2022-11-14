# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

message = Mail(
    from_email='gbvelan2002@gmail.com',
    to_emails='gbvelan2002@gmail.com',
    subject='Applied for the Job Successfullly',
    html_content='<strong> Hi User ! We will contact very soon. </strong>')
try:
    sg = SendGridAPIClient(api_key='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')
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
    print(message)
except Exception as e:
    print(e.message)
