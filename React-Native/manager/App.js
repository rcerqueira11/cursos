import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase'
import { Header } from './src/components/common';
import { firebaseApiKey } from './src/apiKeys/apikeys';
import LoginForm from './src/components/LoginForm'

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp(firebaseApiKey)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
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
