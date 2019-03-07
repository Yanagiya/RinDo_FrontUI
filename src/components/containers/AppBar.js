import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../presentators/Header';
import Footer from '../presentators/Footer';
import { Link } from 'react-router';

@connect(state => ({
	account: state.account,
}))
export default class AppBar extends Component {
  static propTypes = {
    account: PropTypes.object.isRequired,
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

  getTitle() {
    var title = 'EasyJob\u0020\u0020';
    const userName = this.props.account.userName;

    if ( userName == 'null' || userName == null ) {
      return title;
    } 
    return title + "\u0020" + 'Hi, ' + userName;
  }

  render() {
    const styles = this.getStyles();
    const title = this.getTitle();

    return (
        <div>
          <Header title={title} account={this.props.account} dispatch={this.props.dispatch} />
          <main style={styles.main}>
            {this.props.children}
          </main>
        </div>
    );
  }
}

