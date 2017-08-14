import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginBefore from '../presentators/Login/before';
import LoginAfter from '../presentators/Login/after';
import { LOGIN_BEFORE, LOGIN_AFTER} from '../../constants';

@connect(state => ({
  login: state.login,
}))
export default class LoginContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired,
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
    const login = this.props.login;

    if ( login.condition === LOGIN_BEFORE ) {
      return (
        <div>
          <LoginBefore/>
        </div>
      );
    } else if ( login.condition === LOGIN_AFTER ) {
      return (
        <div>
          <LoginAfter login={login} />
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

