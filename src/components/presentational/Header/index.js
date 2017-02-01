import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sticky } from 'react-sticky';
import classnames from 'classnames';

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
    const searchboxComponent = (this.props.noSearch) ? null :
            <SearchBox 
              resultList={this.props.filterResult} 
              onUserInput={this.handleSearchFilter.bind(this)} />;

    return (
      <Sticky className="header content">
        <div className="header__container content__wrapper">
        	<div className="header__section">
            <Link className="header__nav header__nav--container" to={"/"}>
          		<img 
                className="header__logo" 
                src={logo} 
                alt="logo" />
            </Link>
            {searchboxComponent}
            <Link className="header__nav" to={"/"} 
                  activeClassName={'header__nav--active'} 
                  onlyActiveOnIndex={true}>Home</Link>
            <Link className="header__nav" to={"/employees"} 
                  activeClassName={'header__nav--active'} 
                  onlyActiveOnIndex={true}>Employees</Link>
            <Link className="header__nav" to={"/employees/davy"} 
                  activeClassName={'header__nav--active'} 
                  onlyActiveOnIndex={true}>Profile</Link>
        	</div>
        	<div className="header__section">
        		Logout
        	</div>
        </div>
      </Sticky>
    )
  }
}