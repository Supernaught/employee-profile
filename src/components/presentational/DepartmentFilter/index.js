/***
    DepartmentFilter.js

    Generates the department filter button set for excluding the selected 
    department from the list. 
    Once any of these buttons are pressed, the page will be redirected to
    a new location with its toggled department either it would be part or
    removed from the list.
***/

import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link, browserHistory } from 'react-router';
import shortid from 'shortid';

export default class FilterBox extends Component {

    render() {
        const departmentFilter = this.props.departments.map((department) => {
            /***
                - Create new location using 'newLocation'
                - Clone current route location to newLocation using '.getCurrentLocation()' method
                - Fetch and store 'exclude' query through 'excludeDepartmentArr'
                - Convert string query to array using split()
                - Check if target is in query:
                 * if it's TRUE', then remove it from query then set isIncluded to false to disable checkbox UI
                 * if it's FALSE', then push it into array
                - Convert array into string by using join() then update it into newLocation
            ***/
            const newLocation = Object.assign(browserHistory.getCurrentLocation());
            let excludeDepartmentArr = (newLocation.query['exclude'] !== undefined) 
                                        ? newLocation.query['exclude'].split(' ') 
                                        : [];
            const targetIndex = excludeDepartmentArr.indexOf(department.name);
            let isIncluded = true;

            if(targetIndex > -1) {
                excludeDepartmentArr.splice(targetIndex, 1);
                isIncluded = false;
            } else {
                excludeDepartmentArr.push(department.name);
            }

            newLocation.query['exclude'] = excludeDepartmentArr.join(' ').trim();

            return <Link 
                        key={shortid.generate()}
                        className="filter-box__input-container filter-box__input-container--hover"
                        to={newLocation}>
                        <input 
                            className="filter-box__checkbox" 
                            type="checkbox" 
                            defaultChecked={isIncluded} />
                        <div className="filter-box__input-name">{department.display_name}</div>
                    </Link>
        });

    return (
        <div className="filter-box__container">
            {departmentFilter}
        </div>
    )
  }
}