import React, { Component } from 'react';

export default class UsersContainer extends Component {

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}