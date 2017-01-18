import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBox from '../../presentational/SearchBox';
import * as SearchAction from '../../../actions/filterUsersActions';
import { searchUser } from '../../../api/search-api';
import { Link } from 'react-router';

import './index.css';
import logo from './app-logo.svg';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'user' : 'davyjonesbolivar',
    };
  }

  handleSearchFilter(searchFilter) {
    this.props.actions.setFilter(searchFilter);
    this.props.actions.fetchFilterResult(searchUser(searchFilter));
  }

  render() {
    return (
      <header className="header">
        <div className="header__container">
        	<div className="header__section">
            <Link className="header__nav header__nav--container" to={"/"}>
          		<img 
                className="header__logo" 
                src={logo} 
                alt="logo" />
            </Link>
            <SearchBox 
              resultList={this.props.filterResult}
              onUserInput={this.handleSearchFilter.bind(this)} />
            <Link className="header__nav" to={"/"}>Home</Link>
            <Link className="header__nav" to={"/employees"}>Employees</Link>
            <Link className="header__nav" to={"/employees/davy"}>Profile</Link>
        	</div>
        	<div className="header__section">
        		Logout
        	</div>
        </div>
      </header>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);