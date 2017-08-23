from flask import render_template, url_for, request, redirect, flash, abort
from flask_login import login_required, login_user, logout_user, current_user

from . import bookmarks
from .. import db
from ..models import User, Bookmark, Tag
from .forms import BookmarkForm
# @app.route('/add')
@bookmarks.route('/add', methods = ['GET','POST'])
@login_required
def add():
    form = BookmarkForm()
    if form.validate_on_submit():
        url = form.url.data
        description = form.description.data
        bm = Bookmark(user= current_user, url=url, description=description)
        db.session.add(bm)
        db.session.commit()
        flash("Sored bookmark '{}'".format(bm.description))
        return redirect(url_for('auth.index'))
    return render_template('add.html',form=form)


@bookmarks.route('/edit/<int:bookmark_id>', methods=['GET', 'POST'])
@login_required
def edit_bookmark(bookmark_id):
    bookmark = Bookmark.query.get_or_404(bookmark_id)
    if current_user != bookmark.user:
        abort(403)
    form = BookmarkForm(obj=bookmark)
    if form.validate_on_submit():
        form.populate_obj(bookmark)
        db.session.commit()
        flash("Stored '{}'".format(bookmark.description))
        return redirect(url_for('auth.user',username=current_user.username))
    return render_template('bookmark_form.html',form=form, title="Edit bookmark")


@bookmarks.route('/delete/<int:bookmark_id>', methods=['GET', 'POST'])
@login_required
def delete_bookmark(bookmark_id):
    bookmark = Bookmark.query.get_or_404(bookmark_id)
    if current_user != bookmark.user:
        abort(403)
    if request.method == "POST":
        db.session.delete(bookmark)
        db.session.commit()
        flash("Deleted '{}'".format(bookmark.description))
        return redirect(url_for('auth.user',username=current_user.username))
    else:
        flash("Please confirm deleting the bookmark.")
    return render_template('confirm_delete.html',bookmark=bookmark, nolinks=True)


@bookmarks.route('/tag/<name>')
def tag(name):
    tag = Tag.query.filter_by(name=name).first_or_404()
    return render_template('tag.html',tag=tag)


