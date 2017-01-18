import React, { Component } from 'react';

import UserAttendance from '../../presentational/UserAttendance';
import UserLates from '../../presentational/UserLates';
import UserAbsences from '../../presentational/UserAbsences';

export default class UserAttendanceContainer extends Component {
	handleSelectTab() {
		switch(this.props.location.query.tab){
			case 'lates':
				return <UserLates />;
			case 'absences':
				return <UserAbsences />;
			default:
				return <UserAttendance />;
		}
	}

	render() {
		return (
			<div>
			{this.handleSelectTab()}
			</div>
			)
	}
}