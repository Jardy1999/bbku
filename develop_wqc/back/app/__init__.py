from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy




db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../db/data.db'
    db.init_app(app)
    CORS(app)

    from app.routes.server_v1 import server_v1
    app.register_blueprint(server_v1, url_prefix='/api/v1')
    return app
