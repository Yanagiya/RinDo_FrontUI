import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../presentators/Header';
import Footer from '../presentators/Footer';

@connect(state => ({
	login: state.login,
}))
export default class AppBar extends Component {
  static propTypes = {
    login: PropTypes.object.isRequired,
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
    var title = 'Rindo\t\t\t';
    const userName = this.props.login.userName;

    if ( userName == null ) {
      return title;
    } 
    return title + 'Hi, ' + userName;
  }

  render() {
    const styles = this.getStyles();
    const title = this.getTitle();

    return (
        <div>
          <Header title={title} dispatch={this.props.dispatch} />
          <main style={styles.main}>
            {this.props.children}
          </main>
        </div>
    );
  }
}

