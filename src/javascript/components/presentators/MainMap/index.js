import React, { Component, PropTypes } from 'react';

export default class MainMap extends Component {
  render() {
    const path = "./src/javascript/components/presentators/MainMap/worldatlas_800.gif"; 

    return (
      <div>
        <input type="text" style={this.props.style}/>
        <input type="button" value="Search"/>
        <img src={path} style={this.props.style}/>
      </div>
    );
  }
}
