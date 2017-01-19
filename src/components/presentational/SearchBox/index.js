import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Link } from 'react-router';
import shortid from 'shortid';

import './index.css';

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDropDown: false,
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleToggleDropdown(bool) {
    this.setState({activeDropDown: bool});
  }

  handleUserInput() {
    this.props.onUserInput(
      this.searchFilterInput.value
    );
  }

  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({'activeDropDown':false});
    }
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
        className={
          classnames(
            "searchbox__input",
            {'searchbox__input--active' : this.state.activeDropDown}
        )}
        type="text"
        name="search-employee"
        ref={(input) => this.searchFilterInput = input}
        placeholder="Search Employee"
        onChange={this.handleUserInput.bind(this)}
        onFocus={this.handleToggleDropdown.bind(this)} />

        <ul className={
            classnames(
              "searchbox__dropdown-list", 
              {'searchbox__dropdown-list--active' : this.state.activeDropDown}
            )}>
            {SearchResult}
        </ul>
      </div>
      )
    }
  }