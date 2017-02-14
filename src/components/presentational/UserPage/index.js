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
				<div className="banner banner--start-bottom content">
					<div className="banner__content content__wrapper">
						<div className="banner__counter-container">
							<span className="banner__counter ">
								<h4 className="banner__counter-label">VACATION LEAVES</h4>
								<h2 data-denominator="/10" className="banner__counter-value banner__counter-value--fraction">10</h2>
							</span>
							<span className="banner__counter">
								<h4 className="banner__counter-label">SICK LEAVES</h4>
								<h2 data-denominator="/10" className="banner__counter-value banner__counter-value--fraction">8</h2>
							</span>
							<span className="banner__counter">
								<h4 className="banner__counter-label">LATES THIS MONTH</h4>
								<h2 className="banner__counter-value">0</h2>
							</span>
							<span className="banner__counter">
								<h4 className="banner__counter-label">ABSENT</h4>
								<h2 className="banner__counter-value">0</h2>
							</span>
						</div>
					</div>
				</div>
				<div className="content__wrapper">
					--{userId} Profile
					{this.props.children}
				</div>
			</div>
			)
	}
}