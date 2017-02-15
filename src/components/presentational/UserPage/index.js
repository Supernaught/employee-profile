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
							<IndexLink 
								className="profile-page__nav-button" 
								to="/employees/davy" 
								activeClassName="profile-page__nav-button--active"
								onlyActiveOnIndex={true}>
								<svg className="profile-page__nav-icon" viewBox="0 0 24 24">
    								<path fill="inherit" d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" />
								</svg>
								Attendance
							</IndexLink>
							<Link 
								className="profile-page__nav-button" 
								to="/employees/davy/leaves" 
								activeClassName="profile-page__nav-button--active"
								onlyActiveOnIndex={true}>
								<svg className="profile-page__nav-icon" viewBox="0 0 24 24">
    								<path fill="inherit" d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
								</svg>
								<span>Leaves</span>
							</Link>
							<Link 
								className="profile-page__nav-button" 
								to="/employees/davy/info" 
								activeClassName="profile-page__nav-button--active"
								onlyActiveOnIndex={true}>
								<svg className="profile-page__nav-icon" viewBox="0 0 24 24">
								    <path fill="inherit" d="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z" />
								</svg>
								<span>Personal Info</span>
							</Link>
						</nav>
					</div>
				</div>
				<div className="profile-page__content content__wrapper">
					<ProfileCardInfo {...this.props} info={userInfo} />
					{this.props.children}
				</div>
			</div>
			)
	}
}