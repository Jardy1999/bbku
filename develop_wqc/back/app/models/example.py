from app import db

class Category(db.Model):
    __tablename__ = 'tmp'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(10))

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}