import React, { Component } from 'react';
import classnames from 'classnames';

import Header from './components/containers/HeaderContainer';

class App extends Component {
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('app', className)} {...props}>
          <Header />
          <div className="app-header">
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;