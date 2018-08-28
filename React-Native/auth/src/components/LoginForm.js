import React, { Component } from 'react';
import { Buttom, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
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

        <CardSection>
          <Buttom buttomName={"Log in"} />
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;