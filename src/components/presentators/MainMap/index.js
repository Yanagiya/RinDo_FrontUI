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
    const styles = this.getStyles();
    return (
      <div>
        <input type="text" style={this.props.style}/>
        <input type="button" value="Search"/>
        <div id="regions_div" style={styles.map}>
		</div>
      </div>
    );
  }
}
