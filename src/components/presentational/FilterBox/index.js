import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link } from 'react-router';
import shortid from 'shortid';

// Department filter toggle group
import DepartmentFilterGroup from '../DepartmentFilter';
// Employement status filter toggle group
import StatusFilterGroup from '../EmploymentStatusFilter';

import { updateQueryElement, addQueryElement, removeQueryElement } from '../../../methods/routesHelper.js';

import './index.css';

export default class FilterBox extends Component {

    render() {
        return (
          <div className="filter-box filter-box--left">
            <Sticky 
                className="filter-box__sticky">
                <div className="filter-box__container">
                    <div className="filter-box__group-name">
                        Search
                    </div>
                    <div className="filter-box__input-container">
                        <input type="text" placeholder="search name..."/>
                    </div>
                    <div className="filter-box__group-name">
                        Departments
                    </div>
                    <DepartmentFilterGroup {...this.props} />
                    <div className="filter-box__group-name">
                        Employment Status
                    </div>
                    <StatusFilterGroup {...this.props} />
                </div>
            </Sticky>
          </div>
        )
  }
}