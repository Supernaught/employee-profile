import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../presentational/Header';
import * as SearchAction from '../../actions/dropdownSearchActions';

export const HeaderContainer = (props) => {
  return (
    <Header {...props} />
  );
}

function mapStateToProps(state, props) {
  return { 
    user: state.user,
    filter: state.dropdownsearch.dropdownFilter,
    filterResult: state.dropdownsearch.dropdownResult,
    fetchStatus: state.dropdownsearch.fetching
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