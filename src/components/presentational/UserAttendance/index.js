import React, { Component } from 'react';
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

	handleDayClick(day, { disabled, selected }) {
	    if (disabled) {
	      return;
	    }
	    this.setState({ selectedDay: selected ? null : day });
	    console.log("DATE ",day);
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
					        late: new Date(Date.UTC(2017, 2, 1)),
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
					        sunday: day => day.getDay() === 0, 
					        firstOfMonth: day => day.getDate() === 1,
				    	}}
				    	selectedDays={ this.state.selectedDay }
				    	onDayClick={ this.handleDayClick.bind(this) }
					/>
				{dayDetail}
				<hr className="tab__divider"/>
				<h3 className="tab__header">Timeline Activity</h3>
			</div>
			)
	}
}