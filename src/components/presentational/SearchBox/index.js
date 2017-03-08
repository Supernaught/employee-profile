import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { browserHistory } from 'react-router';

import SearchResult from '../SearchResult';
import LoadingIcon from '../LoadingIcon';

import './index.css';

let searchBoxQueryListener = null;

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDropDown: false
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
    searchBoxQueryListener = browserHistory.listen( location =>  {
      this.handleToggleDropdown(false);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
    searchBoxQueryListener();
  }

  handleToggleDropdown(bool) {
    this.setState({activeDropDown: bool});
  }

  handleUserInput() {
    this.props.onUserInput(
      this.searchFilterInput.value
      );
  }

  handleEnterSearch(e) {
    if(e.key === 'Enter' && this.searchFilterInput.value.trim().length > 0) {
      const targetLocation = Object.assign(browserHistory.getCurrentLocation(), {pathname:'/employees'}, {query: {search:this.searchFilterInput.value.trim()}});
      browserHistory.push(targetLocation);
    }
  }

  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.handleToggleDropdown(false);
    }
  }

  render() {
    const loadingIcon = (!this.props.fetchStatus) ? null : 
    <LoadingIcon 
    className={
      classnames('searchbox__loading-icon')
    } />
    return (
      <div className="searchbox">
      <input 
      className={
        classnames(
          "searchbox__input",
          {'searchbox__input--active' : this.state.activeDropDown,
          'searchbox__input--loading' : this.props.fetchStatus}
          )}
        type="text"
        name="search-employee"
        ref={(input) => this.searchFilterInput = input}
        placeholder="Search Employee"
        onChange={this.handleUserInput.bind(this)}
        onFocus={this.handleToggleDropdown.bind(this)}
        onKeyPress={this.handleEnterSearch.bind(this)}
        defaultValue={this.props.filter} />
        
        <SearchResult filter={this.props.filter} activeDropDown={this.state.activeDropDown} data={this.props.resultList} />
        {loadingIcon}
        </div>
        )
  }
}