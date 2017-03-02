import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import Header from '../../containers/HeaderContainer';
import ProfileCardInfo from '../../presentational/ProfileCardInfo';
import Widget from '../../presentational/Widget';

import './index.css';

export default class UserPage extends Component {

	constructor(props) {
		super(props);
		this.state = {'isMobile':false};
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		console.log("USER PAGE ",this.props.user);
		window.scrollTo(0, 0);
		this.handleResize();
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize() {
		// 800px width mobile mode
		if(window.innerWidth <= 800) {
			this.setState({'isMobile':true});
		} else {
			this.setState({'isMobile':false});
		}
	}

	render() {
		const userInfo = {
			"profilepicture" : this.props.user.profilePicture,
			"name" : this.props.user.name,
			"role" : this.props.user.role,
			"email" : this.props.user.email,
			"contact" : this.props.user.contact,
			"birthday" : this.props.user.birthday,
			"startwork" : this.props.user.startWork,
			"location" : this.props.user.location,
		};

		const userCardMobile = (!this.state.isMobile) ? null : 
			<ProfileCardInfo 
				{...this.props}
				className="user-card--mobile"
				info={userInfo}
				isActive={false} />;

		const userCardDesktop = (this.state.isMobile) ? null : 
			<ProfileCardInfo {...this.props} info={userInfo} />;

		return (
			<div className="profile-page content page">
				<Header />
				<div className="banner banner--start-bottom content">
					<div className="banner__content content__wrapper">
						<div className="banner__content-container">
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
				{userCardMobile}
				<div className="profile-page__nav-container">
					<div className="content__wrapper content__wrapper--mobile">
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
    								<path fill="inherit" d="M19,18H9A2,2 0 0,1 7,16V4A2,2 0 0,1 9,2H10V7L12,5.5L14,7V2H19A2,2 0 0,1 21,4V16A2,2 0 0,1 19,18M17,20V22H5A2,2 0 0,1 3,20V6H5V20H17Z" />
								</svg>
								<span>Leaves</span>
							</Link>
							<Link 
								className="profile-page__nav-button" 
								to="/employees/davy/info" 
								activeClassName="profile-page__nav-button--active"
								onlyActiveOnIndex={true}>
								<svg className="profile-page__nav-icon" viewBox="0 0 24 24">
    								<path fill="inherit" d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" />
								</svg>
								<span>Personal Info</span>
							</Link>
						</nav>
					</div>
				</div>
				<div className="profile-page__content content__wrapper content__wrapper--mobile">
					{userCardDesktop}
					<div className="profile-page__content profile-page__content--fill-width profile-page__mobile-content">
						<div className="tab-container">
							{this.props.children}
						</div>
						<Widget>
							<div className="widget__card card">
								<h1 className="widget__title">REMINDERS</h1>
								<hr/>
								<ul className="widget__list">
									
								</ul>
							</div>
							<div className="widget__card card">
								<h1 className="widget__title">UPCOMING EVENTS</h1>
								<hr/>
								<ul className="widget__list">
									1
								</ul>
							</div>
							<div className="widget__card card">
								<h1 className="widget__title">UPCOMING EVENTS</h1>
								<hr/>
								<ul className="widget__list">
									1
								</ul>
							</div>
							<div className="widget__card card">
								<h1 className="widget__title">UPCOMING EVENTS</h1>
								<hr/>
								<ul className="widget__list">
									1
								</ul>
							</div>
						</Widget>
					</div>
				</div>
			</div>
			)
	}
}