import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import Header from '../../containers/HeaderContainer';
import ProfileAvatar from '../../presentational/ProfileAvatar';
import ProfileCardInfo from '../../presentational/ProfileCardInfo';

import './index.css';

export default class UserPage extends Component {
	render() {
		const userId = this.props.params.id;

		const userInfo = {
				"email":"davy@g-angle.co.jp",
				"mobile":"09177700058",
				"birthday":"October 21, 1992",
				"startwork":"June 1, 2015",
				"location":"Cebu City",
		};

		return (
			<div className="profile-page content page">
				<Header />
				<div className="banner banner--start-bottom content">
					<div className="banner__content content__wrapper">
						<div className="banner__counter-container">
							<span className="banner__counter ">
								<h4 className="banner__counter-label">VACATION LEAVES</h4>
								<h2 data-denominator={"/10"} className="banner__counter-value banner__counter-value--fraction">10</h2>
							</span>
							<span className="banner__counter">
								<h4 className="banner__counter-label">SICK LEAVES</h4>
								<h2 data-denominator={"/10"} className="banner__counter-value banner__counter-value--fraction">8</h2>
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
				<div className="profile-page__nav-container">
					<div className="content__wrapper">
						<nav className="profile-page__nav-bar">
							<Link 
								className="profile-page__nav-button" 
								to="/employees/davy?tab=overview" 
								activeClassName="profile-page__nav-button--active"
								onlyActiveOnIndex={true}>
								Overview
							</Link>
							<Link 
								className="profile-page__nav-button" 
								to="/employees/davy?tab=lates" 
								activeClassName="profile-page__nav-button--active"
								onlyActiveOnIndex={true}>
								Lates
							</Link>
							<Link 
								className="profile-page__nav-button" 
								to="/employees/davy?tab=absences" 
								activeClassName="profile-page__nav-button--active"
								onlyActiveOnIndex={true}>
								Absences
							</Link>
						</nav>
					</div>
				</div>
				<div className="profile-page__content content__wrapper">
					<ProfileCardInfo {...this.props} info={userInfo} />
					--{userId} Profile
					{this.props.children}
				</div>
			</div>
			)
	}
}