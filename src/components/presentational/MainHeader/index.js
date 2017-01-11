import React, {Component } from 'react';
import classnames from 'classnames';

import './index.css';
import logo from './logo.svg';

export default class MainHeader extends Component {

  render() {
    return (
      <header className="main-header">
        <div className="main-header__container">
        	<div className="main-header__section">
        		<img src={logo} className="main-header__logo" alt="logo" />
        		<div className="main-header__title">Employee Profile</div>
        	</div>
        	<div className="main-header__section">
        		Logout
        	</div>
        </div>
      </header>
    )
  }
}