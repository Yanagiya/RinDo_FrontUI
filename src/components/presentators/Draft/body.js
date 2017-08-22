import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { Paper, TextField, RaisedButton } from 'material-ui';
import * as actions from '../../../actions';

export default class DraftBody extends Component {
  onload( event ) {
    const { dispatch } = this.props;
    const title = this.refs.title.getValue();
    const poster = event.target.result;
    const body = this.refs.body.getValue();

    dispatch( actions.completeDraft( null, title, poster, body ) );
    browserHistory.push('/');
  }

  onSubmit( event ) {
    event.preventDefault();

    const poster = this.refs.poster.files[0];
    const reader = new FileReader();
    reader.onload = this.onload.bind(this);

    reader.readAsDataURL( poster );
  }

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
    const { draft } = this.props;
    const styles = this.getStyles();

    const form = (
      <form style={styles.form}
            onSubmit={this.onSubmit.bind(this)}>
        <TextField name='title'
                   ref='title'
                   style={styles.textField}
                   hintText='title'
                   floatingLabelText='title'
                   value={draft.title}/>
        <TextField name='body' style={styles.textField}
                   ref='body'
                   hintText='whats this about...?'
                   floatingLabelText='whats this about...?'
                   value={draft.body}
                   multiLine />
        <input type='file' ref='poster' accept='image/*' />
        <RaisedButton type='submit'
                      style={styles.submit}
                      label={'Save'}
                      primary />

        <div style={{ clear: 'both' }}/>
      </form>
    );

    return (
      <AppBar>
        <Paper style={styles.paper}>
          { form }
        </Paper>
      </AppBar>
    );
  }
}

