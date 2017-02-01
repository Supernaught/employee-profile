import React, { Component } from 'react';

import Header from '../../containers/HeaderContainer';

export default class UserPage extends Component {
	render() {
		const userId = this.props.params.id;
		return (
			<div className="content page">
				<Header />
				<div className="content__wrapper">
					--{userId} Profile
					{this.props.children}
				</div>
			</div>
			)
	}
}