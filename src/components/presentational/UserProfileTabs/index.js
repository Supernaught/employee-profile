import React, { Component } from 'react';
import { Link } from 'react-router';

import UserAttendance from '../../presentational/UserAttendance';
import UserLates from '../../presentational/UserLates';
import UserAbsences from '../../presentational/UserAbsences';

export default class UserProfileTabs extends Component {

	componentDidMount() {
		console.log("USER PROFILE TABS ",this.props.user);
	}

	handleSelectTab() {
		switch(this.props.location.query.tab){
			case 'lates':
				return <UserLates {...this.props} />;
			case 'absences':
				return <UserAbsences {...this.props} />;
			default:
				return <UserAttendance {...this.props} />;
		}
	}

	render() {
		return (
			<div className="tab">
				<div className="tab-bar">
					<Link 
						className="tab-bar__nav-elem tab-bar__index-nav" 
						to="/employees/davy">Overview</Link>
					<Link 
						className="tab-bar__nav-elem" 
						to="/employees/davy?tab=lates"
						activeClassName="tab-bar__nav-elem--active">Lates</Link>
					<Link 
						className="tab-bar__nav-elem" 
						to="/employees/davy?tab=absences"
						activeClassName="tab-bar__nav-elem--active">Absences</Link>
				</div>
				{this.handleSelectTab()}
			</div>
			)
	}
}