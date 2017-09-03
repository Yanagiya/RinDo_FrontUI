import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  IconButton
} from 'material-ui';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import SocialShare from 'material-ui/svg-icons/social/share';

import * as actions from '../../../actions';

export default class Post extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      editPost: PropTypes.func,
      removePost: PropTypes.func
    }).isRequired,
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

  static contextTypes = {
    muiTheme: PropTypes.object
  }

  static defaultProps = {
    post: {},
    user: {}
  }

  getStyles() {
    return {
      card: {
        position: 'relative',
        marginTop: 2,
        marginBottom: 2
      },
      iconMenu: {
        position: 'absolute',
        top: 12,
        right: 16,
        zIndex: 5
      },
      cardMedia: {
        marginTop: 2,
        background: 'black',
        minHeight: 100
      },
      cardMediaStyle: {
        maxHeight: '200px',
        textAlign: 'center'
      },
      cardMediaImage: {
        maxHeight: '200px',
        maxWidth: '40%'
      }
    };
  }

  render() {
    const { actions, post } = this.props;
    const styles = this.getStyles();

    let title = <CardTitle title={post.title} />;
    //let title = <CardTitle title={post.title} subtitle={post.subtitle}/>;

    if (post.poster) {
      title = (
        <CardMedia style={styles.cardMedia}
                   mediaStyle={styles.cardMediaStyle}
                   overlay={title}>
          <div>
            <img style={styles.cardMediaImage} src={post.poster}/>
          </div>
        </CardMedia>
      );
    }

    return (
      <Card style={styles.card}>
        <CardHeader title={post.userName}
                    avatar={post.userIcon}>
          <IconMenu style={styles.iconMenu}
                    iconButtonElement={
                      <IconButton><NavigationMoreVert /></IconButton>
                    }>
            <MenuItem leftIcon={<SocialShare />} primaryText='Share'/>
          </IconMenu>
        </CardHeader>
        {title}
        { post.body ? <CardText>{post.body}</CardText> : '' }
      </Card>
    );
  }
}
