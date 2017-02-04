/***
    EmployementStatusFilter.js

    Generates the radio button set for filtering the list based on the 'Employee Status'.
    Once the button is toggled, it would redirect the page via browserHistory, and 
    directs the page with the status selected on the route.
***/

import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link, browserHistory } from 'react-router';
import shortid from 'shortid';

export default class FilterBox extends Component {

    render() {
        const departmentFilter = this.props.userStatus.map((status) => {
            /***
                - Create a new location by cloning the current location from browserHistory into 'newLocation'
                - Initialize default boolean for toggling the UI button - 'isChecked'
                - Check if the status in the list to be generated is in the current location query
                 * if it's 'TRUE', then set isChecked to display the radio button as selected
                 * if it's 'FALSE', then set the UI button to its inactive state
                - Set the newLocation's 'status' query to the selected action filter and pass it into the Link
            ***/
            const newLocation = Object.assign(browserHistory.getCurrentLocation());
            let isChecked = false;

            if(newLocation.query['status'] !== undefined && newLocation.query['status'].trim() === status.name) {
                isChecked = true;
            } else if(newLocation.query['status'] === undefined && status.name === 'active') {
                isChecked = true;
            }   

            newLocation.query['status'] = status.name;

            return <Link 
                        key={shortid.generate()}
                        className="filter-box__input-container filter-box__input-container--hover"
                        to={newLocation}>
                        <input 
                            className="filter-box__checkbox" 
                            type="radio" 
                            defaultChecked={isChecked} />
                        <div className="filter-box__input-name">{status.display_name}</div>
                    </Link>
        });

    return (
        <div className="filter-box__container">
            {departmentFilter}
        </div>
    )
  }
}