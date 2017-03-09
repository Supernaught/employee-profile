import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import DayPicker from 'react-day-picker';
import moment from 'moment';

import Timeline from '../Timeline';

import "react-day-picker/lib/style.css";

let userAttendanceRouteListener = null;

export default class UserAttendance extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'selectedDay': new Date()
		};
	}

	componentWillMount() {
		// console.log("LOL ", this.props.user.name);
		this.handleQueryRoute();
		userAttendanceRouteListener = browserHistory.listen( location =>  {
			this.handleQueryRoute();
		});
	}

	componentWillUnmount() {
		userAttendanceRouteListener();
	}

	handleQueryRoute() {
		const queryDate = browserHistory.getCurrentLocation().query['date'];
		if(queryDate) {
			this.setState({
				'selectedDay':new Date(moment(queryDate, 'YYYY-M-D'))
			});
		}
	}

	handleDayClick(day, { disabled, selected }) {
		if (disabled) {
			return;
		}

		this.setState({ selectedDay: day });
		const newDate = moment(day).format('YYYY-M-D');
		let targetLocation = Object.assign(browserHistory.getCurrentLocation(), {date: newDate});
		targetLocation.query['date'] = newDate;
		browserHistory.push(targetLocation);
	}

	/*
	 *  handleShowMonth will change the month to be viewed in daypicker
	 */
	handleShowMonth(date) {
		this.daypicker.showMonth(new Date(moment(date, 'YYYY-M-D')));
	}
	
	render() {
		const userId = this.props.params.id;
		let dayDetail = (this.state.selectedDay === null) ? null: 
		<div className="card info-card">					
			<h3>{moment(this.state.selectedDay).format('MMMM D YYYY')}</h3>
			<span>Day details, events, and reminders</span>
		</div>;

		return (
			<div>
				<div className="card card--space-bottom">
					<h3 id="overview" className="tab__header">Overview</h3>
					<DayPicker
						ref={ el => this.daypicker = el }
						numberOfMonths={2}
						enableOutsideDays={false}
						modifiers={{
						late: [
						new Date(Date.UTC(2017, 2, 1)),
						new Date(Date.UTC(2017, 1, 9))
						],
						leave: { 
							from: new Date(Date.UTC(2017, 2, 4)), 
							to: new Date(Date.UTC(2017, 2, 8)) 
						},
						absent: [
						new Date(Date.UTC(2017, 1, 2)),
						new Date(Date.UTC(2017, 1, 15))
						],
						event: [
						new Date(Date.UTC(2017, 1, 7)),
						new Date(Date.UTC(2017, 1, 24))
						],					
						holiday: [
						new Date(Date.UTC(2017, 2, 23)),
						new Date(Date.UTC(2017, 2, 24))
						],
						past: { before: new Date() },
						future: { after: new Date() },
						saturday: day => day.getDay() === 6, 
						sunday: day => day.getDay() === 0, 
						firstOfMonth: day => day.getDate() === 1,
						}}
						selectedDays={ this.state.selectedDay }
						initialMonth={ this.state.selectedDay }
						onDayClick={ this.handleDayClick.bind(this) }
					/>
					<hr className="tab__divider"/>
					{dayDetail}
				</div>
				<div className="card card--space-bottom">
					<h3 className="tab__header">Timeline Activity</h3>
					<Timeline {...this.props} handleShowMonth={this.handleShowMonth.bind(this)} />
				</div>
			</div>
			)
	}
}
// {moment(this.state.selectedDay).format('YYYY-M-D')}