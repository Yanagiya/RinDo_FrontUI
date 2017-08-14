import React, { Component, PropTypes } from 'react';

export default class MainMap extends Component {
  
  getStyles() {
	return {
	  map: {
		padding: 20,
 		width: 700,
	  }
	}
  }
  
  render() {
    const path = "../src/components/presentators/MainMap/worldatlas_800.gif";
    const styles = this.getStyles();
    return (
      <div>
        <input type="text" style={this.props.style}/>
        <input type="button" value="Search"/>
        <img src={path} style={this.props.style}/>
      </div>
    );
  }
}
