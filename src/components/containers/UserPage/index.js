import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class UserPage extends Component {

  render() {
    return (
      <div>
        --Employee Profile
        {this.props.children}
      </div>
    )
  }
}