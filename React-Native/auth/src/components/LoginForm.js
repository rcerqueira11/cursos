import React, { Component } from 'react';
import { Text } from  'react-native';
import firebase from 'firebase';
import { Buttom, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = {
    email: 'Test@test.com',
    password: 'password',
    error: ''
  };

  onButtonPress(){
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          })
    })
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
          <Buttom
            functionOnPress={ this.onButtonPress.bind(this) }
            buttomName={"Log in"}
          />
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