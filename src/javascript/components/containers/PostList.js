import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from '../presentators/Post';
import * as BlogActions from '../../redux/modules/blogposts';

@connect(state => ({
  blogposts: state.blogposts,
  users: state.users
}))
export default class PostList extends Component {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { blogposts, users, dispatch } = this.props;
    const actions = bindActionCreators(BlogActions, dispatch);

    return (
      <div>
        {blogposts.map((post, i) =>
          <Post key={i}
                post={post}
                user={users.filter(user => user.id === post.user)[0]}
                actions={actions}/>
        )}
      </div>
    );
  }
}

