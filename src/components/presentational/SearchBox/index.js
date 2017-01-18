import React, {Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import shortid from 'shortid';

import './index.css';

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDropDown: true,
    };
  }

  handleToggleDropdown(bool) {
    // this.setState({activeDropDown: bool});
    this.setState({activeDropDown: true});
  }

  handleUserInput() {
    this.props.onUserInput(
      this.searchFilterInput.value
    );
  }

  render() {
    const SearchResult = this.props.resultList.map((res) => {
      return <li key={shortid.generate()} className="searchbox__result">
                <Link
                  className="searchbox__result__item"
                  to={"/employees/"+res.username}>
                  <span className="searchbox__result__item__name">
                  <strong>{res.first_name +' '+res.last_name}</strong>
                  </span>
                  <span className="searchbox__result__item__label">{res.position}</span>
                </Link>
              </li>
    });
    return (
      <div className="searchbox">
        <input 
        className="searchbox__input"
        type="text"
        name="search-employee"
        ref={(input) => this.searchFilterInput = input}
        placeholder="Search Employee"
        onChange={this.handleUserInput.bind(this)}
        onFocus={this.handleToggleDropdown.bind(this)}
        onBlur={this.handleToggleDropdown.bind(this)} />

        <ul className={
            classnames(
              "searchbox__dropdown-list", 
              {'searchbox__dropdown-list--hidden' : !this.state.activeDropDown}
            )}>
            {SearchResult}
        </ul>
      </div>
      )
    }
  }