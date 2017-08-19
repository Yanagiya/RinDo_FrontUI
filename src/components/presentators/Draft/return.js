import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { Paper, TextField, RaisedButton } from 'material-ui';

export default class DraftReturn extends Component {
  getStyles() {
    return {
      paper: {
        padding: 20
      },
      form: {
        margin: 0
      },
      textField: {
        width: '100%'
      },
      submit: {
        float: 'right',
        marginTop: 10
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <AppBar>
        <Paper style={styles.paper}>
          Please login before creating a draft.
        </Paper>
      </AppBar>
    );
  }
}

