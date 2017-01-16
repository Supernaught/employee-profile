import React, {Component } from 'react';
import classnames from 'classnames';

import './index.css';
import * as userApi from '../../../api/user-api';

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDropDown: false,
    };
  }

  handleToggleDropdown(bool) {
    this.setState({activeDropDown: bool});
  }

  handleUserInput(){
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
        value={this.props.searchFilter}
        ref={(input) => this.searchFilterInput = input}
        placeholder="Search Employee"
        onFocus={()=>this.handleToggleDropdown(true)}
        onBlur={()=>this.handleToggleDropdown(false)}
        onChange={this.handleUserInput.bind(this)} />

        <ul className={
            classnames(
              "searchbox__dropdown-list", 
              {'searchbox__dropdown-list--hidden' : !this.state.activeDropDown}
            )}>
          <li className="searchbox__result">Davy Jones Bolivar</li>
          <li className="searchbox__result">Alfonz Montelibano</li>
        </ul>
      </div>
      )
    }
  }