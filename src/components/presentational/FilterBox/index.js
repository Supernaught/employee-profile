import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link } from 'react-router';
import shortid from 'shortid';

// Department filter toggle group
import DepartmentFilterGroup from '../DepartmentFilter';
// Employement status filter toggle group
// import StatusFilterGroup from '../EmploymentStatusFilter';

import { updateQueryElement, addQueryElement, removeQueryElement } from '../../../methods/routesHelper.js';

import './index.css';

export default class FilterBox extends Component {

    handleEnterSearch() {
        console.log("FUCK YOU");
    }

    render() {
        return (
          <div className="filter-box filter-box--left">
            <div className="filter-box__group-name">
                Search Employee
            </div>
            <div className="filter-box__input-container">
                <input 
                    className="filter-box__input-field" 
                    type="text" 
                    placeholder="Search name..."
                    defaultValue={this.props.location.query.search}/>
            </div>
            <Sticky 
                className="filter-box__sticky">
                <div className="filter-box__container">
                    <div className="filter-box__group-name">
                        Departments
                    </div>
                    <DepartmentFilterGroup {...this.props} />
                </div>
            </Sticky>
          </div>
        )
  }
}

