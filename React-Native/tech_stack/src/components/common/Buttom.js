import React from 'react';
import { Text, TouchableOpacity } from  'react-native';

const Buttom = (props) => {
  const { functionOnPress, buttomName } = props
  const {
    buttomStyle,
    textStyle
  } = styles
  return  (
    <TouchableOpacity onPress={functionOnPress} style={buttomStyle}>
      <Text style={textStyle} >
        {buttomName}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttomStyle:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  }

}

export {Buttom};
