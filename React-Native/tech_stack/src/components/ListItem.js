import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import { CardSection } from './common'
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    const {
      library,
      selectedLibraryId
    } =  this.props;

    if( library.id == selectedLibraryId ){
      return (
        <Text>
          {library.description}
        </Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const {
      library,
      selectLibrary
    } =  this.props;
    const {
      id,
      title
    } = library;


    return (
      <TouchableWithoutFeedback
        onPress={()=> selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId}
}

export default connect(mapStateToProps, actions)(ListItem);