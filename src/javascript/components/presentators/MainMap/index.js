import React, { Component, PropTypes } from 'react';

export default class MainMap extends Component {
  render() {
    const path = "./src/javascript/components/presentators/MainMap/worldatlas_800.gif"; 

    return (
      <img src={path} style={this.props.style}/>
    );
  }
}
