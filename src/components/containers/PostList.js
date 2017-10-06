import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from '../presentators/Post';

@connect(state => ({
  blogposts: state.blogposts,
}))
export default class PostList extends Component {
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

