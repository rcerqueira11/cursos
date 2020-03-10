import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    const {
      handleClick,
      label
    } = props
    this.state = {
      isHovering: false
    }
  }

  render() {
    const styles = {
      buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        width: 250,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#00c85f'
      },
      hoverButtonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        width: 250,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#006630'
      },
      textStyle:{
        alignSelf: 'center',
        color: '#ffffff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        width: 108,
        height: 22,
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.61,
        letterSpacing: 'normal',
      }
    }
    return (
      <button
        onMouseOver={() => this.setState({isHovering: true})}
        onMouseOut={() => this.setState({isHovering: false})}
        className="btn btn-default"
        style={this.state.isHovering ? this.styles.hoverButtonStyle : this.styles.buttonStyle}
        onClick={handleClick}>{label}
      </button>
    )
  }
}

export default Button;
