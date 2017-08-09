import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';
import ActionAccountCicle
from 'material-ui/lib/svg-icons/action/account-circle';
import * as LoginActions from '../../../redux/modules/login';

class LoginBefore extends Component {
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
            <TextField ref='identity'
                       hintText='user name'
                       floatingLabelText='user name'
                       defaultValue=''
                       onKeyDown={::this.submit} /><br/>
            <TextField ref='password'
                       hintText='password'
                       floatingLabelText='password'
                       type='password'
                       defaultValue=''
                       onKeyDown={::this.submit} /><br />
            <RaisedButton style={styles.submit}
                          label='Submit'
                          onTouchTap={::this.submit}
                          primary />
          </Paper>
        </div>
    );
  }

  submit(event) {
    const { dispatch } = this.props;
    const actions = bindActionCreators(LoginActions, dispatch);

    const identity = this.refs.identity.getValue();
    const password = this.refs.password.getValue();

    if (event.type === 'keydown' && event.keyCode !== 13) return;

    actions.login(identity, password);

  }
}
export default connect()(LoginBefore);
