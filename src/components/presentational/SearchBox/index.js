import React, {Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../../../actions/searchAction';

import './index.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDropDown: false,
    };
  }

  handleInputActive(bool) {
    this.setState({activeDropDown: bool});
  }

  handleInputSearch(e){
    console.log(this.props.action.searchNames(e.target.value));
  }

  render() {
    return (
      <div className="searchbox">
        <input 
        className="searchbox__input"
        type="text" 
        name="search-employee"
        placeholder="Search Employee"
        onFocus={()=>this.handleInputActive(true)}
        onBlur={()=>this.handleInputActive(false)}
        onChange={this.handleInputSearch.bind(this)}/>

        <ul className={
            classnames(
              "searchbox__dropdown-list", 
              {'searchbox__dropdown-list--hidden' : !this.state.activeDropDown}
            )
          }>
          <li className="searchbox__result">Davy Jones Bolivar</li>
          <li className="searchbox__result">Alfonz Montelibano</li>
        </ul>
      </div>
      )
    }
  }

function mapStateToProps(state, prop) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SearchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);