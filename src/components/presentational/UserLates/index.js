import React, { Component } from 'react';
import DayPicker from 'react-day-picker';

import "react-day-picker/lib/style.css"

export default class UserLates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'selectedDay': new Date()
    }
  }

  handleDayClick(day, { disabled, selected }) {
    if (disabled) {
      return;
    }
    this.setState({ selectedDay: selected ? null : day })
  }

  render() {
    return (
      <div className="card">
        <h3 className="tab__header">Lates</h3>
        <DayPicker
          numberOfMonths={2}
          modifiers={{
            late: new Date(Date.UTC(2017, 2, 1, 14, 0, 0)),
            leave: { 
              from: new Date(Date.UTC(2017, 2, 4, 14, 0, 0)), 
              to: new Date(Date.UTC(2017, 2, 8, 14, 0, 0)) 
            },
            absent: [
              new Date(Date.UTC(2017, 1, 4, 14, 0, 0)),
              new Date(Date.UTC(2017, 1, 15, 14, 0, 0))
            ],
            sunday: day => day.getDay() === 0, 
            firstOfMonth: day => day.getDate() === 1,
          }}
          selectedDays={ this.state.selectedDay }
          onDayClick={ this.handleDayClick.bind(this) }
        />
        <h3 className="tab__header">Lates</h3>
      </div>
      )
  }
}