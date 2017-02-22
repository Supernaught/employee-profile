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
    document.addEventListener('touchstart', this.handleClick, false);
  }

  componentWillUnmount() {
    // remove event listener
    document.removeEventListener('click', this.handleClick, false);
    document.removeEventListener('touchstart', this.handleClick, false);
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
          <ProfileAvatar className="header__user-picture" src="http://i.imgur.com/BgC2FVK.png" alt="user avatar" />
          <svg className="dropdown__toggle-icon dropdown__toggle-icon--xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
          <div className="dropdown__menu dropdown__menu--right">
            <Link to="/employees/davy" className="dropdown__menu-item">Your Profile</Link>
            <Link to="" className="dropdown__menu-item">Edit Profile</Link>
            <Link to="/about" className="dropdown__menu-item">About</Link>
            <Link to="" className="dropdown__menu-item">Help</Link>
            <hr/>
            <Link to="" className="dropdown__menu-item">Sign out</Link>
          </div>
        </div>
    )
  }
}