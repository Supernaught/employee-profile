import React, { Component } from 'react';

import Header from '../../containers/HeaderContainer';

import './index.css';

export default class UserPage extends Component {
	render() {
		const userId = this.props.params.id;
		return (
			<div className="profile-page content page">
				<Header />
				<div className="profile-page__banner">

				</div>
				<div className="profile-page__nav-bar">
				s
				</div>
				<div className="content__wrapper">
					--{userId} Profile
					{this.props.children}
				</div>
			</div>
			)
	}
}