import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RegisterBefore from '../presentators/Register/before';
import RegisterAfter from '../presentators/Register/after';
import { REGISTER_STATE } from '../../constants';

@connect(state => ({
  register: state.register,
}))
export default class RegisterContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    register: PropTypes.object.isRequired,
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
    const { register, dispatch } = this.props;

    if ( register.condition === REGISTER_STATE.BEFORE ) {
      return (
        <div>
          <RegisterBefore dispatch={dispatch}/>
        </div>
      );
    } else if ( register.condition === REGISTER_STATE.AFTER ) {
      return (
        <div>
          <RegisterAfter register={register} />
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

