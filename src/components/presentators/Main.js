import React, { Component } from 'react';

export default class Main extends Component {
  getStyles() {
    console.log("get color");
    return {
      content: {
        background: "#ECEFF1",
        height: 900,
        margin: -10
      }
    }; 
  }
  render() {
    let{ children } = this.props;
    const styles = this.getStyles();
    console.log("main is here")
    return (
      <div style={styles.content}>
        <main>
          {children}
        </main>
      </div>
    );
  }
}
