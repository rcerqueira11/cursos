/** @format */

/** @format */
//import a library to hel create a component
import React from 'react';
import {AppRegistry, Text} from 'react-native';

// create a component
const App = () => {
  return (
    <Text> Some Text </Text>
  );
};


// render it to the device
AppRegistry.registerComponent('albums', () => App)