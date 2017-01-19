import React, { Component } from 'react';
import classnames from 'classnames';
import { StickyContainer } from 'react-sticky';

import Header from './components/containers/HeaderContainer';

class App extends Component {
  
  render() {
    const { className, ...props } = this.props;
    return (
      <StickyContainer className={classnames('app', className)} {...props}>
          <Header />
          <StickyContainer className="app-header">
            {this.props.children}
          </StickyContainer>
      </StickyContainer>
    );
  }
}

export default App;