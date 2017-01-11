import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class UsersContainer extends Component {

	render() {
		return (
			<div>
				-Employees Container
				{this.props.children}
			</div>
			)
	}
}