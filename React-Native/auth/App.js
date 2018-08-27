import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Header } from  './src/components/common'

export default class App extends React.Component {

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        <Text>Holis </Text>
        <Text style={styles.container} >Holis </Text>
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
