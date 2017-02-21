import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';
import ActionAccountCicle
from 'material-ui/lib/svg-icons/action/account-circle';
import * as AuthActions from '../../redux/modules/auth';
import { server } from '../../index.js';

class Register extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
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
      paper: {
        maxHeight: 400,
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
            <ActionAccountCicle style={{ height: 100, width: 100 }}/><br/>
            <TextField ref='userName'
                       hintText='user name'
                       floatingLabelText='user name'
                       defaultValue='John'
                       onKeyDown={::this.submit} /><br/>
            <TextField ref='password'
                       hintText='password'
                       floatingLabelText='password'
                       type='password'
                       onKeyDown={::this.submit} /><br />
            <RaisedButton style={styles.submit}
                          label='regsiter'
                          onTouchTap={::this.submit}
                          primary />
          </Paper>
        </div>
    );
  }

  submit(event) {
    const { dispatch } = this.props;
    const actions = bindActionCreators(AuthActions, dispatch);

    const userName = this.refs.userName.getValue();
    const password = this.refs.password.getValue();

    if (event.type === 'keydown' && event.keyCode !== 13) return;

    console.log("## before registerUser ##");
    //console.log(identity);
    //console.log(this.props);
    //console.log(this.refs);
    //console.log(this.refs.password);
    server.registerUser(userName, password );
  }
}

export default connect(state => ({ user: state.user }))(Register);
