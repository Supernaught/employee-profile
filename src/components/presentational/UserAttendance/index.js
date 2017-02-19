import React, { Component } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

export default class UserAttendance extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'heatmapValues':[{ date: '2017-01-01' },{ date: '2017-01-22' },{ date: '2017-02-03' }]
		};
	}
	
	render() {
		return (
			<div>
				<h3 className="tab__header">Overview</h3>
				<div className="react-calendar-heatmap__container">
				<CalendarHeatmap
				  endDate={new Date('2017-02-19')}
				  numDays={182.5}
				  values={this.state.heatmapValues}
				/>
				</div>
				<hr className="tab__divider"/>
				<h3 className="tab__header">Timeline Activity</h3>
			</div>
			)
	}
}