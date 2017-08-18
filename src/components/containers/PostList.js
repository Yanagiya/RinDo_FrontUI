import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from '../presentators/Post';
import * as BlogActions from '../../redux/modules/blogposts';

@connect(state => ({
  blogposts: state.blogposts,
}))
export default class PostList extends Component {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { blogposts, dispatch } = this.props;

    return (
      <div style={this.props.style}>
        {blogposts.map((post, i) =>
          <Post key={i}
                post={post}
                actions={null}
                dispatch={dispatch}
          />
        )}
      </div>
    );
  }
}

