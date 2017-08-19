import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BlogBody from '../presentators/Blog/body';

@connect()
export default class BlogContainer extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <BlogBody dispatch={dispatch} />
      </div>
    );
  }
}

