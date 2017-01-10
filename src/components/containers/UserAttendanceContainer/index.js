import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import UserAttendance from '../../presentational/UserAttendance';
import UserLates from '../../presentational/UserLates';
import UserAbsences from '../../presentational/UserAbsences';

export default class UserAttendanceContainer extends Component {
	handleSelectTab() {
		switch(this.props.location.query.tab){
			case 'lates':
			return <UserLates/>;
			break;

			case 'absences':
			return <UserAbsences/>;
			break;

			default:
			return <UserAttendance/>;
			break;
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