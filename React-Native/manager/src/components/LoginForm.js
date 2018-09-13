import React, { Component } from "react";
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from "../actions";
import { Card, CardSection, Input, Buttom} from './common'


class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            value={this.props.email}
            onChangeText= {this.onEmailChange.bind(this)}
            label={"Email"}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
            label={"Password"}
          />
        </CardSection>

        <CardSection>
            <Buttom
            // functionOnPress={this.onButtonPress.bind(this)}
            buttomName={"Log in"}
            />
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  }
};


export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);