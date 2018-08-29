import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import { Header, Buttom, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import { firebaseApiKey } from './apiKeys/apikeys'

export default class App extends React.Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp(firebaseApiKey)
    //handle for event login or logout
    firebase.auth().onAuthStateChanged((user)=> {
      //sign in is user, if sign out is nil
      if (user){
        this.setState({ loggedIn: true})
      }else{
        this.setState({ loggedIn: false})
      }
    })
  }

  logOut(){
    firebase.auth().signOut()
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Buttom
              functionOnPress={this.logOut.bind(this)}
              buttomName={"Log out"}
              />
          </CardSection>
        );
      case false:
        return <LoginForm />;

      default:
        return <Spinner size="large" />
    }

  }

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        <View>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

