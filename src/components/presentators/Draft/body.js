import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { Paper, TextField, RaisedButton, DropDownMenu, MenuItem } from 'material-ui';
import * as actions from '../../../actions';

import rjson from '../../../utils/region/region.json';

export default class DraftBody extends Component {
  onload( event ) {
    const { dispatch, userId } = this.props;

    const countryIndex = this.refs.country.props.value;
    const countryCall = rjson["world"][countryIndex].call;

    const draftData = {
      postId: null,
      title: this.refs.title.getValue(),
      poster: event.target.result,
      body: this.refs.body.getValue(),
      userId: userId,
      country: countryCall,
      goodPoint: 0,
    };

    dispatch( actions.completeDraft( draftData ) );
    browserHistory.push('/');
  }

  onSubmit( event ) {
    event.preventDefault();

    const poster = this.refs.poster.files[0];
    const reader = new FileReader();
    reader.onload = this.onload.bind(this);

    reader.readAsDataURL( poster );
  }

  onChange( event, index, value ) {
    const { dispatch, userId } = this.props;

    const countryIndex = value;
    const countryCall = rjson["world"][countryIndex].call;
    const draftData = {
      postId: null,
      title: null,
      poster: event.target.result,
      body: null,
      userId: userId,
      country: countryCall,
      goodPoint: 0,
    };
    dispatch( actions.updateDraftUi( draftData ) );
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
      input: {
        float: "left",
      },
      dropDown: {
        float: "left",
      },
      submit: {
        float: 'right',
        marginTop: 10
      }
    };
  }

  shiftRegionFront( country ) {
    const i = this.getRegionIndex( country );
    const region = rjson["world"][i];
    rjson["world"].splice(i, 1);
    rjson["world"].unshift(region);
  }

  getRegionIndex( country ) {
    const region = rjson["world"].filter((element) => (element.call == country))[0];
    const i = rjson["world"].indexOf(region);

    return i;
  }

  render() {
    const { account, draft } = this.props;
    const { country1, country2, country3 } = account;
    const styles = this.getStyles();

    this.shiftRegionFront( country1 );
    this.shiftRegionFront( country2 );
    this.shiftRegionFront( country3 );

    const countryIndex = this.getRegionIndex( draft.country );

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
        <input type='file' style={styles.input} ref='poster' accept='image/*' />
        <DropDownMenu ref='country' 
                      style={styles.dropDown} 
                      value={(countryIndex == -1) ? 0 : countryIndex} 
                      onChange={this.onChange.bind(this)} >
          {rjson["world"].map((region, i) => 
            <MenuItem value={i++} primaryText={region.name}/>
          )}
        </DropDownMenu>
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

