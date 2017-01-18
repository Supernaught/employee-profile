import React, { Component } from 'react';
import { Link } from 'react-router';

import SearchBox from '../../presentational/SearchBox';
import { searchUser } from '../../../api/search-api';

import './index.css';
import logo from './app-logo.svg';

export default class Header extends Component {

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