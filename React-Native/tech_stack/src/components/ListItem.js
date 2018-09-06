import React, { Component } from 'react';
import { Text } from "react-native";
import { CardSection } from './common'

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const { library } =  this.props;
    return (
      <CardSection>
        <Text style={titleStyle}>
          {library.title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;