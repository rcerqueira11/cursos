import React, { Component } from 'react';
import { View } from 'react-native';
import { Buttom, Card, CardSection} from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Buttom buttomName={"Log in"} />
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;