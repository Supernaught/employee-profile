import React, { Component } from 'react';

import Header from '../../containers/HeaderContainer';
import ProfileAvatar from '../../presentational/ProfileAvatar';

import './index.css';

export default class UserPage extends Component {
	render() {
		const userId = this.props.params.id;
		return (
			<div className="profile-page content page">
				<Header />
				<div className="content__wrapper">
					--{userId} Profile
					{this.props.children}
				</div>
			</div>
			)
	}
}