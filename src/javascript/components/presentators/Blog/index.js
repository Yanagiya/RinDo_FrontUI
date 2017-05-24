import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import AppBar from '../../containers/AppBar';
import PostList from '../../containers/PostList';
import MainMap from '../MainMap';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import * as BlogActions from '../../../redux/modules/blogposts';

export default class Blog extends Component {
  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  getStyles() {
    return {
      addContent: {
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 100
      },
      mainMap: {
        width: 700,
        float: "left"
      },
      postList: {
        width: 400,
        float: "right"
      }
    };
  }

  render() {
    const { history } = this.context;
    const styles = this.getStyles();

    return (
      <AppBar>
        <MainMap style={styles.mainMap} />
        <PostList style={styles.postList} />      
        <FloatingActionButton style={styles.addContent}
                              onTouchTap={() => {
                                history.pushState(null, '/post/new');
                              }}>
          <ContentAdd />
        </FloatingActionButton>
      </AppBar>
    );
  }
}

