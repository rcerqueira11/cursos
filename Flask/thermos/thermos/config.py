import os

basedir= os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = '\x05\xa5\xa6\xb8\xe8\x06\x0f\xa9\x98\xf4\xf8\xe5H\x92j9\xab\x16\xe5\xe0\xa8\x9e\xb9\x92'
    DEBUG = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    # DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir,'thermos.db')

class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir,'data-test.sqlite')
    WTF_CSRF_ENABLED = False

class ProductionConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir,'thermos.db')


config_by_name = dict(
    dev = DevelopmentConfig,
    test = TestingConfig,
    prod = ProductionConfig
)

