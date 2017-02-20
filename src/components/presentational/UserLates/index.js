import React, { Component } from 'react';
import classnames from 'classnames';
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
      <div>
      <h3 className="tab__header">Lates</h3>
      <DayPicker
        numberOfMonths={2}
        initialMonth={ new Date(2016, 1) }
        selectedDays={ this.state.selectedDay }
        onDayClick={ this.handleDayClick.bind(this) }
      />
      </div>
      )
  }
}