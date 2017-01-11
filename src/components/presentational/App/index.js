import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import MainHeader from '../MainHeader';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  // <img src={logo} className="App-logo" alt="logo" />
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <MainHeader />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
