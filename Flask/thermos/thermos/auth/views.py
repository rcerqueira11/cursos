# import json

from flask import render_template, url_for, request, redirect, flash, abort
from flask_login import login_required, login_user, logout_user, current_user

from . import auth
from .. import db
from ..models import User, Bookmark
from .forms import LoginForm, SignupForm
# from thermos import app, db, login_manager
# from forms import BookmarkForm, LoginForm, SignupForm
# from models import User, Bookmark, Tag

@auth.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
       #login validate the user..
       user = User.get_by_username(form.username.data)
       if user is not None and user.check_password(form.password.data):
           login_user(user, form.remember_me.data)
           flash("Logged in successfully as {}.".format(user.username))
           return redirect(request.args.get("next") or url_for('.user',username=user.username))
        #    request.args.get("next"): salva la pagina donde queriamos acceder para que cuando nos logueemos nos redirecione a dicha pagina
    flash("Incorrect username or password")
    return render_template("login.html", form=form)
    
@auth.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('auth.index'))


@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    form =SignupForm()
    if form.validate_on_submit():
        user = User(email = form.email.data,
                    username = form.username.data,
                    password=form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Welcome, {}! Please login.'.format(user.username))
        return redirect(url_for('.login'))

    return render_template("signup.html",form=form)

@auth.route('/user/<username>')
def user(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('user.html',user=user)


@auth.route('/index')
@auth.route('/') 
def index():
    return render_template('index.html', new_bookmarks=Bookmark.newest(5))