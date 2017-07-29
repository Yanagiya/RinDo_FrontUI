import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';
import ActionAccountCicle
from 'material-ui/lib/svg-icons/action/account-circle';
import * as RegisterActions from '../../../redux/modules/register';
import RegisterContainer from '../../containers/RegisterContainer';

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
          <RegisterContainer />
        </div>
    );
  }

}
export default connect()(Register);
