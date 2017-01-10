import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Employees extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Employees', className)} {...props}>
        <h1>
          Employees
        </h1>
      </div>
    );
  }
}
