#! /usr/bin/evn python 

import os 

from thermos import create_app , db

from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

app = create_app(os.getenv('THERMOS_ENV') or 'dev')
manager = Manager(app)

migrate = Migrate(app,db)

manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()

















# from thermos import app, db
# from thermos.models import User, Bookmark, Tag
# from flask_script import Manager, prompt_bool
# from flask_migrate import Migrate, MigrateCommand

# manager = Manager(app)
# migrate = Migrate(app,db)

# manager.add_command('db', MigrateCommand)

# @manager.command
# def insert_data():
#     reindert = User(username="reindert", email="reindert@example.com",password="test")
#     db.session.add(reindert)
#     # db.session.add(User(username="arjen", email="arjen@example.com",password="test"))
#     # db.session.commit()
#     # print 'Initialized the database'

#     def add_bookmark(url, description, tags):
#         db.session.add(Bookmark(url=url, description=description, user=reindert,tags=tags))

#     for name in ["python", "flask", "webdev", "programming", "training", "news", "orm","coolstuff", "databases","emacs","gdt","django"]:
#         db.session.add(Tag(name=name))
#     db.session.commit()

#     add_bookmark("http://www.pluralsight.com", "Pluralsight. hardcore","traning,programming,python,flask,webdev")
#     add_bookmark("http://ww.python.org", "Python - my","python")
#     add_bookmark("http://flask.pocoo.org", "Flask: web development one drop at a time","python,flask,webdev")
#     add_bookmark("http://www.reddit.com", "Reddit. From","news,coolstuff,fun")
#     add_bookmark("http://www.sqlalchemy", "Werkzeug","python,orm,databases")
#     add_bookmark("http://jinja.pocoo.org", "Jinja2","programming,flask,webdev,python")
#     add_bookmark("http://pythonhosted.org/Flask-SQLAlchemy", "ORM plugin ","programming,flask,orm,databases")
#     add_bookmark("http://www.initializr.com", "Get up and running","webdev")
#     add_bookmark("http://www.emacswiki.org", "About my favorite editor ","emacs")
#     add_bookmark("http://orgmode.org", "Productivity in text mode","emacs,gdt")
#     add_bookmark("http://www.djangoproject.org", "Django another great web framework","python,webdev,django")
#     add_bookmark("http://www.stackoverflow", "For all  your proramming questions","programming")


#     arjen = User(username="arjen", email="arjen@example.com",password="test")
#     db.session.add(arjen)
#     db.session.commit()
    
# @manager.command
# def dropdb():
#     if prompt_bool(
#         "Are you sure you wan to lose all your data"):
#         db.drop_all()
#         print 'Droppend the database'

# if __name__ == '__main__':
#     manager.run()