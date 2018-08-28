import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import { firebaseApiKey } from './apiKeys/apikeys'
export default class App extends React.Component {


  componentWillMount() {
    firebase.initializeApp(firebaseApiKey)
  }



  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});