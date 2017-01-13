import React, {Component } from 'react';
import classnames from 'classnames';

import './index.css';
import logo from './app-logo.svg';

export default class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="header__container">
        	<div className="header__section">
        		<img src={logo} className="header__logo" alt="logo" />
        	</div>
        	<div className="header__section">
            {this.props.user}
        		Logout
        	</div>
        </div>
      </header>
    )
  }
}