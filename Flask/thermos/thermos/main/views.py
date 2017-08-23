from flask import render_template

from . import main 
from .. import login_manager
from ..models import User, Bookmark, Tag


# to use the 404 error page we use handler error
@main.app_errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
    
# to use the 500 error page we use handler error
@main.app_errorhandler(500)
def server_error(e):
    return render_template('500.html'), 500

@main.app_errorhandler(403)
def server_error(e):
    return render_template('403.html'), 500


@main.app_context_processor
def inject_tags():
    return dict(all_tags = Tag.all)


@login_manager.user_loader
def load_user(userid):
    return User.query.get(int(userid))


