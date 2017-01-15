import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Header from './components/containers/Header';
import logo from './logo.svg';
import Cart from './components/containers/Cart';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'user':'davyjonesbolivar',
      'searchFilter':''
    };
  }

  handleSearchFilter(searchFilter) {
    this.setState({
      searchFilter: searchFilter
    });
  }
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('app', className)} {...props}>
          <Header 
            user={this.state.user} 
            searchFilter={this.state.searchFilter}
            onUserInput={this.handleSearchFilter.bind(this)} />
          <div className="app-header">
            {this.props.children}
            <Cart />
          </div>
      </div>
    );
  }
}

export default App;
