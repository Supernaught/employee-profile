import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link } from 'react-router';
import shortid from 'shortid';

import { createDepartmentPath, replaceQueryElement } from '../../../methods/routesHelper.js';

import './index.css';

export default class FilterBox extends Component {

    render() {
        this.props.handleQuery(this.props.location.query);

        const departmentFilter = this.props.departments.map((department) => {
        const pathname = this.props.location.pathname;
        let filterQuery = '';
        let isCheck = true;
        const query = this.props.location.query;

        if(query.department !== undefined) {
            isCheck = !(query.department.indexOf(department.name) > -1);
        }

        const deptPath = createDepartmentPath(query.department, isCheck, department.name);
        filterQuery = replaceQueryElement(query, 'department', deptPath);

        return <Link 
                    key={shortid.generate()}
                    className="filter-box__input-container"
                    to={pathname+filterQuery}>
                    <input 
                        className="filter-box__checkbox" 
                        type="checkbox" 
                        defaultChecked={isCheck} />
                    <div className="filter-box__input-name">{department.display_name}</div>
                </Link>
    });
    return (
      <div className="filter-box filter-box--left">
      	<Sticky 
      		className="filter-box__sticky">
      		<div className="filter-box__container">
        		<div className="filter-box__group-name">
        			Departments
        		</div>
        		{departmentFilter}
        		<div className="filter-box__group-name">
        			Employment Status
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"
                        defaultChecked />
        			<div className="filter-box__input-name">Active Employees</div>
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"/>
        			<div className="filter-box__input-name">In-active Employees</div>
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"/>
        			<div className="filter-box__input-name">Both</div>
        		</div>
        	</div>
        </Sticky>
      </div>
    )
  }
}