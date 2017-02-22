import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import DayPicker from 'react-day-picker';
import moment from 'moment';

import "react-day-picker/lib/style.css";

export default class UserAttendance extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'selectedDay': new Date()
		};
	}

	componentWillMount() {
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
	
	render() {
		let dayDetail = (this.state.selectedDay === null) ? null: 
				<div className="card">					
			 		<h3>{moment(this.state.selectedDay).format('MMMM D YYYY')}</h3>
			 	</div>;

		return (
			<div>
				<h3 className="tab__header">Overview</h3>
				    <DayPicker
				        numberOfMonths={2}
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
				{dayDetail}
				<hr className="tab__divider"/>
				<h3 className="tab__header">Timeline Activity</h3>
				{moment(this.state.selectedDay).format('YYYY-M-D')}
			</div>
			)
	}
}