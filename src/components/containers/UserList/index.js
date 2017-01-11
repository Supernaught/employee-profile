import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class UserList extends Component {

	render() {
		return (
			<div>
				--Employees List (Default Route)
				{this.props.children}
			</div>
			)
	}
}