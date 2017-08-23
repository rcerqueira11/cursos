from flask import url_for
from flask_testing import TestCase

import thermos
from thermos.auth.models import User
from thermos.bookmarks.models import Bookmark

class ThermosTestCase(TestCase):

    #Create the app we have to override it and 
    #pass argument for test config
    def create_app(self):
        return thermos.create_app('test')

    #Runs before the test functions
    def setUp(self):
        self.db = thermos.db
        self.db.create_all()
        self.client = self.app.test_client()

        u = User(username='test', email='test@examplet.com', password='test')
        bm = Bookmark(user=u, url='https://www.example.com', tags="one,two,three")

        self.db.session.add(u)
        self.db.session.add(bm)
        self.db.session.commit()

        self.client.post(url_for('auth.login'),
            data = dict(username='test', password='test'))

    #runs at the end of testing and just simply clear the db (test.db)
    def tearDown(self):
        thermos.db.session.remove()
        thermos.db.drop_all()

    def test_delete_all_tags(self):
        response = self.client.post(
            url_for('bookmarks.edit_bookmark',bookmark_id=1),
            data = dict(
                url = "http://test.example.com",
                tags= ""
            ),
            follow_redirects = True
        )

        assert response.status_code == 200
        bm = Bookmark.query.first()
        assert not bm._tags