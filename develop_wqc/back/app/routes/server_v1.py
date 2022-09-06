from flask import Blueprint
from flask_restful import Api
from app.resources import Hello

server_v1 = Blueprint('server_v1', __name__)

api = Api(server_v1)

api.add_resource(Hello.Hello, '/hello')
api.add_resource(Hello.PrintData, '/print_data')
