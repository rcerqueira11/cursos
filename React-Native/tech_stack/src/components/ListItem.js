import React, { Component } from 'react';
import { Text } from "react-native";
import { connect } from "react-redux";
import { CardSection } from './common'
import * as actions from "../actions";

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const {
      library,
      selectLibrary
    } =  this.props;
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

const
export default connect(null, actions)(ListItem);