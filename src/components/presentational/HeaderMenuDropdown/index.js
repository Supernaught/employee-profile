import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class HeaderMenuDropdown extends Component {

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
        className={
          classnames(
            "header__nav header__nav--mobile dropdown mobile-menu",
            {'dropdown--active': this.state.dropdownActive})}
        onClick={this.handleToggleDropdown.bind(this, true)}>
        <svg className="header__nav-icon dropdown__toggle-icon" viewBox="0 0 24 24">
          <path fill="inherit" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
        <div className="dropdown__menu">
          <Link to="/" className="dropdown__menu-item">Home</Link>
          <hr/>
          <Link to="/employees" className="dropdown__menu-item">Employees</Link>
          <hr/>
          <Link to="/employees/davy" className="dropdown__menu-item">Profile</Link>
        </div>
      </div>
    )
  }
}

// className={classnames("header__nav dropdown", {'dropdown--active': this.state.dropdownActive})}
//           onClick={this.handleToggleDropdown.bind(this, true)}>