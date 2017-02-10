import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import classnames from 'classnames';

import ProfileAvatar from '../../presentational/ProfileAvatar';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownActive:false
    };
  }

  componentWillMount() {
    // add event listener 
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    // remove event listener
    document.removeEventListener('click', this.handleClick, false);
  }

  handleToggleDropdown(bool, e) {
    this.setState({dropdownActive: bool});
  }

  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.handleToggleDropdown(false);
    }
  }

  render() {
    return (
    	<div 
          className={classnames("header__nav dropdown", {'dropdown--active': this.state.dropdownActive})}
          onClick={this.handleToggleDropdown.bind(this, true)}>
          <ProfileAvatar className="header__user-picture" />
          <svg className="dropdown__toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
          <div className="dropdown__menu">
            <Link to="/employees/davy" className="dropdown__menu-item">Your Profile</Link>
            <Link to="" className="dropdown__menu-item">Edit Profile</Link>
            <Link to="/about" className="dropdown__menu-item">About</Link>
            <hr/>
            <Link to="" className="dropdown__menu-item">Sign out</Link>
          </div>
        </div>
    )
  }
}