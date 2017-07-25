import React, { PropTypes, Component } from 'react';
import { AppBar, IconButton, Styles, RaiseButton } from 'material-ui';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TitleStyle from 'material-ui/src/styles/colors.js';
import NavigationMoreVert from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionAccountCicle from 'material-ui/lib/svg-icons/action/account-circle';
import Colors from 'material-ui/src/styles/colors.js';
import SocialGithub from '../../../images/GitHub-Mark-Light-120px-plus.png';

export default class Header extends Component {
  static contextTypes = {
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
                    onTouchTap={() => history.pushState(null, '/register')} 
          />
          <MenuItem leftIcon={<ActionAccountCicle />} 
                    primaryText='Login'
                    onTouchTap={() => history.pushState(null, '/login')} 
          />
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help &amp; feedback" />
          <MenuItem primaryText="Settings" />
        </IconMenu>
      </div>
    );

    return (
      <AppBar title='Rindo'
              style={styles.Stitle}
              iconElementLeft={<span />}
              iconElementRight={iconElementRight} 
      />
    );
  }
}
