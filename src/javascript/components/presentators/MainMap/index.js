import React, { Component, PropTypes } from 'react';

export default class MainMap extends Component {
  getStyles() {
    return {
      addContent: {
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 100
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <img src="./worldatlas_800.gif" />
    );
  }
}
