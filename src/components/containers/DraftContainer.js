import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DraftBody from '../presentators/Draft/body';

@connect( state => ({
  draft: state.draft,
}))
export default class DraftContainer extends Component {
  render() {
    const { draft, dispatch } = this.props;

    return (
      <div>
        <DraftBody draft={draft} dispatch={dispatch} />
      </div>
    );
  }
}

