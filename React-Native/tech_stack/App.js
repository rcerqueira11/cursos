import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'
import { Header } from './src/components/common'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View >
          <Header headerText="Tech Stack" />
          <View style={styles.container} >
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </View>
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
