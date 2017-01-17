import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBox from '../../presentational/SearchBox';
import * as SearchAction from '../../../actions/filterUsersActions';

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
  }

  render() {
    return (
      <header className="header">
        <div className="header__container">
        	<div className="header__section">
        		<img 
              className="header__logo" 
              src={logo} 
              alt="logo" />
            <SearchBox 
              onUserInput={this.handleSearchFilter.bind(this)} />
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
    filter: state.filter.filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SearchAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);