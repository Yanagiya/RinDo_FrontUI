import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { Paper, TextField, RaisedButton } from 'material-ui';
import * as actions from '../../../actions';

export default class DraftBody extends Component {
  onSubmit(event, actions, payload) {
    event.preventDefault();

    this.props.dispatch( actions.completeDraft() );
    browserHistory.push('/');
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
            onChange={({ target }) => {
              updateDraft({ [target.name]: target.value });
            }}
            onSubmit={this.onSubmit.bind(this)}>
        <TextField name='title'
                   style={styles.textField}
                   hintText='title'
                   floatingLabelText='title'
                   value={draft.title}/>
        <TextField name='subtitle'
                   style={styles.textField}
                   hintText='subtitle'
                   floatingLabelText='subtitle'
                   value={draft.subtitle}/>
        <TextField name='poster'
                   style={styles.textField}
                   hintText='poster url'
                   floatingLabelText='poster url'
                   value={draft.poster}/>
        <TextField name='body' style={styles.textField}
                   hintText='whats this about...?'
                   floatingLabelText='whats this about...?'
                   value={draft.body}
                   multiLine />
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

