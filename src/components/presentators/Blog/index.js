import React, { Component, PropTypes } from 'react';
import BlogContainer from '../../containers/BlogContainer';

export default class Blog extends Component {
  getStyles() {
    return {
      main: {
        position: "absolute",
        width: 1920,
        height: 1080,
        backgroundColor: "yellow"
      }
    };
    console.log("writing");
  }
  render() {
    const styles = this.getStyles();
    return (
      <BlogContainer style={styles.main}/>
    );
  }
}

