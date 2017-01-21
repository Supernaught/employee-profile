import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchPage from '../presentational/SearchPage';
import * as SearchAction from '../../actions/filterUsersActions';

export const SearchPageContainer = (props) => {
  return (
    <SearchPage {...props} />
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
)(SearchPageContainer);