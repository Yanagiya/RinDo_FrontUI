import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { Paper, TextField, RaisedButton } from 'material-ui';
import DraftContainer from '../../containers/DraftContainer';

export default class Draft extends Component {
  render() {
    return (
      <div>
        <DraftContainer />
      </div>
    );
  }
}

