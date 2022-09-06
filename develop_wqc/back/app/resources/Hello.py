from flask_restful import Resource
from flask import jsonify
from app.models.example import Category

class PrintData(Resource):
    def get(self):
        categories = Category.query.all()
        # return jsonify({'data': [x.json() for x in categories]})
        return jsonify({'data': [x.as_dict() for x in categories]})


class Hello(Resource):
    @staticmethod
    def get():
        return {'data': "[get] hello flask"}

    @staticmethod
    def post():
        return "[post] hello flask"