import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';

class RegisterAfter extends Component {
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
    const register = this.props.register;

    if ( !register.result ) {
      return (
        <div style={styles.center}>
          <Paper style={styles.paper}>
            registration failed<br />
            <Link to={'/'} activeClassName="active">go back to top page</Link>
          </Paper>
        </div>
      );
    } else {
      return (
        <div style={styles.center}>
          <Paper style={styles.paper}>
            registration success<br />
            user name: {this.props.register.userName}<br />
            user id: {this.props.register.userId}<br />
            <Link to={'/'} activeClassName="active">go back to top page</Link>
          </Paper>
        </div>
      );
    }
  }
}
export default connect()(RegisterAfter);
