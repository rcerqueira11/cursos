import React, { Component } from 'react';
import { View, Text } from 'react-native';



class AlbumList extends Component {

  componentWillMount() {
    console.log("holis")
  }


  render() {
    return (
    <View>
      <Text> ALbum list</Text>
    </View>
    );
  }
}

export default AlbumList;