import React, { Component } from 'react';
import classnames from 'classnames';
import { StickyContainer } from 'react-sticky';

class App extends Component {
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('app', className)} {...props}>
          <StickyContainer className="app-header">
            {this.props.children}
          </StickyContainer>
      </div>
    );
  }
}

export default App;