import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link } from 'react-router';
import shortid from 'shortid';

import './index.css';

export default class FilterBox extends Component {

    render() {
        this.props.handleQuery(this.props.location.query);

        const departmentFilter = this.props.departments.map((department) => {
        const pathname = this.props.location.pathname;
        let filterQuery = '';
        let isCheck = true;

        if(this.props.location.query.filter !== undefined) {
            isCheck = !(this.props.location.query.filter.indexOf(department.name) > -1);
        }

        if(isCheck) {
            if(this.props.location.query.filter !== undefined){
                filterQuery = this.props.location.search + '&filter=' + department.name;
            } else{
                filterQuery = '?filter=' + department.name;
            }
        } else{
            if(typeof(this.props.location.query.filter) === 'object') {
                const newFilter = this.props.location.query.filter.map((filter) => {
                    if(filter !== department.name){
                        return '&filter='+filter;
                    } else {
                        return '';
                    }
                });
                filterQuery = '?'+newFilter.join('').slice(1);
            } else if(typeof(this.props.location.query.filter) === 'string') {
                filterQuery = "";
            }
        }

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