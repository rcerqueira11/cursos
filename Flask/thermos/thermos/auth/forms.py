from flask_wtf import FlaskForm as Form
from wtforms.fields import StringField, PasswordField, BooleanField,SubmitField
from wtforms.fields.html5 import URLField
from wtforms.validators import DataRequired, url, Length, Email, Regexp, EqualTo, ValidationError
from thermos.auth.models import User

class LoginForm(Form):
    username = StringField('You Username: ', validators=[DataRequired()])
    password = PasswordField('Password: ', validators=[DataRequired()])
    remember_me = BooleanField('Keep me logged in')
    submit = SubmitField('Log In')

class SignupForm(Form):
    username = StringField('Username',
                    validators=[
                        DataRequired(), Length(3,80),
                        Regexp('[A-Za-z0-9]{3,}$',
                            message ="Usernames consist of numbers, letters,"
                                    'and undercres.')
                    ])
    password = PasswordField('Password',
                    validators=[
                        DataRequired(),
                        EqualTo('password2', message='Passwords must match')
                    ])
    password2 = PasswordField('Confirm password', validators=[DataRequired()])
    email = StringField('Email',
                        validators=[DataRequired(), Length(1,120),Email()])

    def validate_email(self,email_field):
        if User.query.filter_by(email=email_field.data).first():
            raise ValidationError('There already is a user with this email address')
    
    def validate_username(self,username_field):
        if User.query.filter_by(username=username_field.data).first():
            raise ValidationError('This username is already taken.')