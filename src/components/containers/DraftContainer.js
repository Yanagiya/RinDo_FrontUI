import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DraftReturn from '../presentators/Draft/return';
import DraftBody from '../presentators/Draft/body';

@connect( state => ({
  account: state.account,
  draft: state.draft,
}))
export default class DraftContainer extends Component {
  render() {
    const { account, draft, dispatch } = this.props;

    if ( account.userId == 'null' || account.userId == null ) {
      return (
        <div>
          <DraftReturn />
        </div>
      );
    }
    return (
      <div>
        <DraftBody account={account} 
                   draft={draft} 
                   userId={account.userId} 
                   dispatch={dispatch} />
      </div>
    );
  }
}

