from flask import Blueprint

#current name python module 
auth = Blueprint('auth', __name__)

from . import views