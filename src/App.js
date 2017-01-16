import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Header from './components/containers/Header';
import logo from './logo.svg';
import Cart from './components/containers/Cart';

class App extends Component {
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('app', className)} {...props}>
          <Header />
          <div className="app-header">
            {this.props.children}
            <Cart />
          </div>
      </div>
    );
  }
}

export default App;
