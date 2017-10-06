import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BlogBody from '../presentators/Blog/body';

@connect( state => ({
  region: state.region,
}))
export default class BlogContainer extends Component {
  render() {
    const { dispatch, region } = this.props;

    return (
      <div>
        <BlogBody dispatch={dispatch} region={region} />
      </div>
    );
  }
}

