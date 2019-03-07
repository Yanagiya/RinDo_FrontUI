import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import AppBar from '../../containers/AppBar';
import PostList from '../../containers/PostList';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as actions from '../../../actions';

export default class BlogBody extends Component {
  getStyles() {
    return {
	  section: {
      display:"flex",
      flexDirection: "row",
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
      display: "flex",
      flexWrap: "wrap",
      justifyContent:"center",
      blexBasis: 0,
      width: "100%",
    }
    };
  }

  render() {
    const { dispatch } = this.props;
    const styles = this.getStyles();

    return (
      <AppBar>
        <div id="section" style={styles.section}>
          <PostList style={styles.postList} />     
          <FloatingActionButton style={styles.addContent}
                              onTouchTap={() => {
                                dispatch( actions.initDraft() );
                                browserHistory.push('/post/new');
                              }}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </AppBar>
    );
  }
}

