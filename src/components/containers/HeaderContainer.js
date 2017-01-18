import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../presentational/Header';
import * as SearchAction from '../../actions/filterUsersActions';

export const HeaderContainer = (props) => {
  return (
    <Header {...props} />
  );
}

function mapStateToProps(state, props) {
  return { 
    user: state.user,
    filter: state.filter.filter,
    filterResult: state.filter.result
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SearchAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);