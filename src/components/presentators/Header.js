import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import * as Colors from 'material-ui/styles/colors';
import { AppBar, IconButton, RaiseButton } from 'material-ui';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import ActionAccountCicle from 'material-ui/svg-icons/action/account-circle';
import SocialGithub from './GitHub-Mark-Light-120px-plus.png';
import * as actions from '../../actions';

export default class Header extends Component {
  static contextTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  getStyles() {
    return {
      iconButton: {
        color: Colors.white
      },
      link: {
        display: 'inline-block',
        height: 48,
        width: 48,
        textAlign: 'center'
      },
      image: {
        height: 24,
        width: 24
      },
      Stitle: {
        height: 50,
        //width: 24,
        color: Colors.orange900,
        textAligh: 'center'
      }
    };
  }

  getLoginItem( account ) {
    if ( account.userName == 'null' || account.userName == null ) {
      return (
        <MenuItem leftIcon={<ActionAccountCicle />} 
                  primaryText='Login'
                  onTouchTap={() => {
                    browserHistory.push('/login');
                    this.props.dispatch( actions.loginInit() );
                  }} 
        />
      );
    }
    return (
      <MenuItem leftIcon={<ActionAccountCicle />} 
                primaryText='Logout'
                onTouchTap={() => {
                  this.props.dispatch( actions.logout() );
                }} 
      />
    );
  }

  render() {
    const styles = this.getStyles();
    const { title, account, dispatch } = this.props;

    const loginItem = this.getLoginItem( account );

    const iconElementRight = (
      <div>
        <IconMenu style={styles.iconMenu}
                  iconButtonElement={
                    <IconButton>
                      <NavigationMoreVert color='white' />
                    </IconButton>
                  }
        >
          <MenuItem leftIcon={<ActionAccountCicle />} 
                    primaryText='Register'
                    onTouchTap={() => {
                      browserHistory.push('/register');
                      this.props.dispatch( actions.registerInit() );
                    }} 
          />
          {loginItem}
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help &amp; feedback" />
          <MenuItem primaryText="Settings" />
        </IconMenu>
      </div>
    );

    return (
      <AppBar title={ title }
              style={styles.Stitle}
              iconElementLeft={<span />}
              iconElementRight={iconElementRight} 
      />
    );
  }
}
