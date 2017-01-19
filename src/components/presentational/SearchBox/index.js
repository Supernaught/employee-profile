import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import SearchResult from '../SearchResult';

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
        
        <SearchResult activeDropDown={this.state.activeDropDown} data={this.props.resultList} />
        
      </div>
      )
    }
  }