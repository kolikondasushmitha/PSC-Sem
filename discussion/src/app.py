from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'
db = SQLAlchemy(app)

# Import models
from models import User, Course, Thread, Reply

# Import controllers
from controllers.auth_controller import *
# from controllers.thread_controller import *

if __name__ == '__main__':
    app.run(debug=True)
