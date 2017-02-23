import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.css';

export default class Timeline extends Component {
	
	render() {
		return (
			<ul className="timeline">
				<h3 className="timeline__header">
					<Link 
						className="timeline__month-header"
						to="/employees/davy?date=2017-2-1"
						onClick={this.props.handleShowMonth.bind(this, '2017-2-1')}>
						February
						<span className="timeline__year-header">2018</span>
					</Link>
				</h3>
				<li className="timeline__event timeline__event--late">Late</li>
				<li className="timeline__event timeline__event--absent">Absent</li>
				<li className="timeline__event timeline__event--leave">Leave</li>
				<li className="timeline__event timeline__event--leave">Holiday</li>
				<li className="timeline__event timeline__event--leave">Event</li>
				<h3 className="timeline__header">
					<Link 
						className="timeline__month-header"
						to="/employees/davy?date=2017-1-1"
						onClick={this.props.handleShowMonth.bind(this, '2017-1-1')}>
						January
						<span className="timeline__year-header">2018</span>
					</Link>
				</h3>
				<li className="timeline__event timeline__event--late">Late</li>
				<li className="timeline__event timeline__event--absent">Absent</li>
				<li className="timeline__event timeline__event--leave">Leave</li>
				<li className="timeline__event timeline__event--leave">Holiday</li>
				<li className="timeline__event timeline__event--leave">Event</li>
			</ul>
		)
	}
}