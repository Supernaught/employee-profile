import React, { Component } from 'react';

export default class UserPage extends Component {
	render() {
		const userId = this.props.params.id;
		return (
			<div>
				--{userId} Profile
				{this.props.children}
			</div>
			)
	}
}