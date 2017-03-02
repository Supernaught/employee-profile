import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserPage from '../presentational/UserPage';
import * as UserProfileAction from '../../actions/userActions';

export const UserPageContainer = (props) => {
  return (
    <UserPage {...props} />
  );
}

function mapStateToProps(state, props) {
  return { 
    user: state.user.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserProfileAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);