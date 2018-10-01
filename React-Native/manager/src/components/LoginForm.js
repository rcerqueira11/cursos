import React, { Component } from "react";
import { View, Text} from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Input, Buttom, Spinner} from './common'


class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  onButtonPress(){
    const { email, password } = this.props;

    this.props.loginUser({ email, password})
  }

  renderButton(){
    if (this.props.loading){
      return <Spinner size="large"/>
    }

    return(
      <Buttom
        functionOnPress={this.onButtonPress.bind(this)}
        buttomName={"Log in"}
      />
    )
  }

  renderError(){
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
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

        {this.renderError()}

        <CardSection>

            {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
};


export default connect(mapStateToProps, {
   emailChanged,
   passwordChanged,
   loginUser
  })(LoginForm);