import React, {Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import './index.css';

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDropDown: false,
    };
  }

  handleToggleDropdown(bool, e) {
    this.setState({activeDropDown: bool});
  }

  handleUserInput() {
    this.props.onUserInput(
      this.searchFilterInput.value
    );
  }

  render() {
    return (
      <div className="searchbox">
        <input 
        className="searchbox__input"
        type="text"
        name="search-employee"
        ref={(input) => this.searchFilterInput = input}
        placeholder="Search Employee"
        onChange={this.handleUserInput.bind(this)}
        onFocus={this.handleToggleDropdown.bind(this, true)}
        onBlur={this.handleToggleDropdown.bind(this, false)} />

        <ul className={
            classnames(
              "searchbox__dropdown-list", 
              {'searchbox__dropdown-list--hidden' : !this.state.activeDropDown}
            )}>
          <li className="searchbox__result">
            <Link
              className="searchbox__result__item"
              to="/employees/davyb" 
              onClick={()=>this.handleClickLink()}>
              <span className="searchbox__result__item__name">Davy Jones</span>
              <span className="searchbox__result__item__label">Developer</span>
            </Link>
          </li>
          <li className="searchbox__result">
            <Link
              className="searchbox__result__item"
              to="/employees/alfonz" 
              onClick={()=>this.handleClickLink()}>
              <span className="searchbox__result__item__name">Alfonz Montelibano</span>
              <span className="searchbox__result__item__label">Developer</span>
            </Link>
          </li>
        </ul>
      </div>
      )
    }
  }