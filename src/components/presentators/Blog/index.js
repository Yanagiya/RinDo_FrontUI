import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import AppBar from '../../containers/AppBar';
import PostList from '../../containers/PostList';
import MainMap from '../MainMap';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as BlogActions from '../../../redux/modules/blogposts';

export default class Blog extends Component {
  getStyles() {
    return {
	  section: {
		display:"flex"
	  },
      addContent: {
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 100
      },
      mainMap: {
		flexBasis: 0,
		flexDirection: "row",
        width: 700,
        float: "left",
      },
      postList: {
		blexBasis: 0,
		flexDirection: "row",
		background: "yellow",
        width: 400,
        float: "right",
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <AppBar>
        <div style={styles.section}>
          <MainMap style={styles.mainMap} />
          <PostList style={styles.postList} />      
          <FloatingActionButton style={styles.addContent}
                              onTouchTap={() => {
                                browserHistory.push('/post/new');
                              }}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </AppBar>
    );
  }
}
