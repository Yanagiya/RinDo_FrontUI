import React, { PropTypes, Component } from 'react';
import { AppBar, IconButton, Styles, RaiseButton } from 'material-ui';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TitleStyle from 'material-ui/src/styles/colors.js';
import NavigationMoreVert from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionAccountCicle from 'material-ui/lib/svg-icons/action/account-circle';
import Colors from 'material-ui/src/styles/colors.js';
import SocialGithub from '../../../images/GitHub-Mark-Light-120px-plus.png';
import { REGISTER_INIT } from '../../redux/modules/register';
import { LOGIN_INIT } from '../../redux/modules/login';

export default class Header extends Component {
  static contextTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  getStyles() {
    return {
      iconButton: {
        color: Styles.Colors.white
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
        height: 24,
        withd: 24,
        color: Styles.Colors.orange900,
        textAligh: 'center'
      }
    };
  }

  render() {
    const { history } = this.context;
    const styles = this.getStyles();
    const { title } = this.props;

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
                      history.pushState(null, '/register');
                      this.props.dispatch({
                        type: REGISTER_INIT,
                      });
                    }} 
          />
          <MenuItem leftIcon={<ActionAccountCicle />} 
                    primaryText='Login'
                    onTouchTap={() => {
                      history.pushState(null, '/login')
                      this.props.dispatch({
                        type: LOGIN_INIT,
                      });
                    }} 
          />
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
