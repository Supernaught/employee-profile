import React, { Component } from 'react';

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