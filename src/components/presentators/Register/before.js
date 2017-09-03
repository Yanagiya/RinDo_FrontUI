import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Paper, TextField, RaisedButton } from 'material-ui';
import ActionAccountCicle from 'material-ui/svg-icons/action/account-circle';
import * as actions from '../../../actions';
import defaultIcon from './default_user_icon.png';

export default class RegisterBefore extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  onloadIcon( event ) {
    this.refs.icon.src = event.target.result;
  }

  onChangeIcon( event ) {
    const icon = this.refs.icon_input.files[0];
    const reader = new FileReader();
    reader.onload = this.onloadIcon.bind(this);
    reader.readAsDataURL( icon );
  }

  getStyles() {
    return {
      center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 10
      },
      icon: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        maxHeight: 600,
        maxWidth: 400,
        textAlign: 'center',
        padding: '20px 40px'
      },
      submit: {
        marginTop: 10,
        marginBottom: 20,
        width: '100%'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    

    return (
        <div style={styles.center}>
          <Paper style={styles.paper}>
            <Paper>
              <img src={defaultIcon} style={styles.icon} ref="icon" />
              <input type="file" 
                     ref="icon_input" 
                     accept='image/*' 
                     onChange={this.onChangeIcon.bind(this)} />
            </Paper>
            {/*<ActionAccountCicle style={{ height: 100, width: 100 }}/><br/>*/}
            <TextField ref='identity'
                       hintText='user name'
                       floatingLabelText='user name'
                       defaultValue=''
                       onKeyDown={this.submit.bind(this)} /><br/>
            <TextField ref='password'
                       hintText='password'
                       floatingLabelText='password'
                       type='password'
                       defaultValue=''
                       onKeyDown={this.submit.bind(this)} /><br />
            <TextField ref='email'
                       hintText='email'
                       floatingLabelText='email'
                       defaultValue=''
                       onKeyDown={this.submit.bind(this)} /><br/>
           <RaisedButton style={styles.submit}
                          label='Submit'
                          onTouchTap={this.submit.bind(this)}
                          primary />
          </Paper>
        </div>
    );
  }

  submit(event) {
    const identity = this.refs.identity.getValue();
    const password = this.refs.password.getValue();
    const country1 = "India";
    const country2 = "India";
    const country3 = "India";
    const email    = this.refs.email.getValue();
    const userIcon = this.refs.icon.src;

    if (event.type === 'keydown' && event.keyCode !== 13) return;

    this.props.dispatch( actions.registerSend({
      userName: identity, 
      password: password, 
      email: email, 
      userIcon: userIcon,
      country1: country1,
      country2: country2,
      country3: country3,
    }) );
  }
}
