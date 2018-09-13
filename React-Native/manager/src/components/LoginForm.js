import React, { Component } from "react";
import { connect } from 'react-redux'
import { emailChanged } from "../actions";
import { Card, CardSection, Input, Buttom} from './common'


class LoginForm extends Component {
  onEmailChange(text){


  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            // value={this.state.email}
            onChangeText= {this.onEmailChange.bind(this)}
            label={"Email"}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            // value={this.state.password}
            // onChangeText={password => this.setState({ password })}
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

const mapStateToProps = (state, ownProps) => ({

})


export default  LoginForm;