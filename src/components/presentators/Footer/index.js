import React, { Component } from 'react';

export default class Footer extends Component {
  getStyles() {
    return {
      layout: {
        height: '100px'
      },

      footerText: {
        textAlign: 'right',
        padding: '40px 0',
        fontSize: '10px'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
        <div style={styles.layout}>
          <div style={styles.footerText}>
            Contribute to the
            <a href='https://github.com/knowbody/redux-react-router-example-app'
               target='_blank'
               style={{textDecoration: 'none'}}> project on GitHub</a>.
          </div>
        </div>
    );
  }
}
