
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
def sendgrid(text,email):
  print(text)
  message = Mail(
    from_email='gbvelan2002@gmail.com',
    to_emails=email,
    subject='Applied Job Successfullly',
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
