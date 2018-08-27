import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCok203zernl4E1Hg-lSE7RLzBUfc9MvBg',
      authDomain: 'auth-70464.firebaseapp.com',
      databaseURL: 'https://auth-70464.firebaseio.com',
      projectId: 'auth-70464',
      storageBucket: 'auth-70464.appspot.com',
      messagingSenderId: '1017296346248'
    })
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