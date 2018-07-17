import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the dejnkjkjhkjveloper menu.</Text>
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

////////////////////////////////////////////////
/** @format */
//import a library to hel create a component
// import React from 'react';
// import { Text, AppRegistry, View  } from 'react-native';

// // create a component
// const App = () => {
//   return (
//     <View>
//     <Text> Some Text </Text>
//     </View>
//   );
// };


// // render it to the device
// AppRegistry.registerComponent('albooms', () => App())