import React, { Component } from 'react';
import { Text } from  'react-native';
import firebase from 'firebase';
import { Buttom, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {
    email: 'Test@test.com',
    password: 'password',
    error: '',
    success: '',
    loading: false
  };

  onButtonPress(){
    const { email, password } = this.state

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onCreateSuccess.bind(this))
          .catch(this.onLogginFail.bind(this))
    })
  }

  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      success: 'Logged succefull'
    });
  }

  onCreateSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      success: 'Account Created!'
    });
  }

  onLogginFail(){
    this.setState({
      loading: false,
      error: 'Authentication Falied',
      success: ''
    });
  }

  renderButton(){
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return(
      <Buttom
        functionOnPress={this.onButtonPress.bind(this)}
        buttomName={"Log in"}
      />
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText= {email => this.setState({ email })}
            label={"Email"}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label={"Password"}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;