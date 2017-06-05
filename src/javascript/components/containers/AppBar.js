import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../presentators/Header';
import Footer from '../presentators/Footer';

@connect()
export default class AppBar extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  }

  getStyles() {
    return {
      main: {
        maxWidth: 1200,
        margin: '0 auto',
        paddingTop: 10
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
        <div>
          <Header />
          <main style={styles.main}>
            {this.props.children}
          </main>
        </div>
    );
  }
}

