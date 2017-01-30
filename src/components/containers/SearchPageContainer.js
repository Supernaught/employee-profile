import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchPage from '../presentational/SearchPage';
import * as SearchAction from '../../actions/searchUsersActions';

export const SearchPageContainer = (props) => {
  return (
    <SearchPage {...props} />
  );
}

function mapStateToProps(state, props) {
  return { 
    search: state.search.search,
    departments: state.search.searchDepartment,
    userStatus: state.search.userStatus,
    result: state.search.searchResult
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
)(SearchPageContainer);