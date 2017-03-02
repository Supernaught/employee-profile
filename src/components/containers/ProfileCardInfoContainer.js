import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProfileCardInfo from '../presentational/ProfileCardInfo';
import * as UserProfileAction from '../../actions/userActions';

export const UserProfileContainer = (props) => {
  return (
    <ProfileCardInfo {...props} />
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
)(ProfileCardInfo);