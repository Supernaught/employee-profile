import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link, browserHistory } from 'react-router';
import shortid from 'shortid';

// Department filter toggle group
import DepartmentFilterGroup from '../DepartmentFilter';
// Employement status filter toggle group
import EmployeeStatusFilterGroup from '../EmploymentStatusFilter';

import './index.css';

export default class FilterBox extends Component {

    handleEnterSearch(e) {
        if(e.key === 'Enter') {
            let searchQuery = Object.assign(browserHistory.getCurrentLocation().query, {search:e.target.value});
            const targetLocation = Object.assign(browserHistory.getCurrentLocation(), {query: searchQuery});
            browserHistory.push(targetLocation);
        }
    }

    render() {
        return (
          <div className="filter-box filter-box--left">
            <div className="filter-box__group-name" style={{'paddingTop':'23px'}}>
                SEARCH EMPLOYEE
            </div>
            <div className="filter-box__input-container">
                <input 
                    className="filter-box__input-field" 
                    type="text" 
                    ref={(input) => this.searchEmployeeInput = input}
                    placeholder="Search name..."
                    onKeyPress={this.handleEnterSearch.bind(this)}/>
            </div>
            <Sticky 
                className="filter-box__sticky">
                <div className="filter-box__container">
                    <div className="filter-box__group-name">
                        DEPARTMENTS
                    </div>
                    <DepartmentFilterGroup {...this.props} />
                    <div className="filter-box__group-name">
                        EMPLOYEE STATUS
                    </div>
                    <EmployeeStatusFilterGroup {...this.props} />
                </div>
            </Sticky>
          </div>
        )
  }
}

