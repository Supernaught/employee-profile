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

  handleToggleDropdown(bool) {
    this.setState({activeDropDown: bool});
  }

  handleUserInput() {
    this.props.onUserInput(
      this.searchFilterInput.value
    );
  }

  handleClickLink() {
    console.log("fhi")
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
        onFocus={()=>this.handleToggleDropdown(true)}
        onBlur={()=>this.handleToggleDropdown(false)} />

        <ul className={
            classnames(
              "searchbox__dropdown-list", 
              {'searchbox__dropdown-list--hidden' : !this.state.activeDropDown}
            )}>
          <li className="searchbox__result">
            <Link to="/employees/davyb" onClick={()=>this.handleClickLink()}>Davy Jones</Link>
          </li>
          <li className="searchbox__result">
            haldjf
          </li>
        </ul>
      </div>
      )
    }
  }