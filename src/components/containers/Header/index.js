import React, {Component } from 'react';
import classnames from 'classnames';

import SearchBox from '../../presentational/SearchBox'

import './index.css';
import logo from './app-logo.svg';

export default class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="header__container">
        	<div className="header__section">
        		<img 
              className="header__logo" 
              src={logo} 
              alt="logo" />
            <SearchBox {...this.props} />
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