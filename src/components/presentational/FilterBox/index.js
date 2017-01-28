import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link } from 'react-router';
import shortid from 'shortid';

import { updateQueryElement, addQueryElement, removeQueryElement } from '../../../methods/routesHelper.js';

import './index.css';

export default class FilterBox extends Component {

    render() {
        this.props.handleQuery(this.props.location.query);

        let query_target = this.props.location.query.exclude;
        let isCheck = true;

        const departmentFilter = this.props.departments.map((department) => {
            const pathname = this.props.location.pathname;
            let filterQuery = '';
            const query = this.props.location.query;

            let departmentElements = '';

            if(query_target !== undefined){
                if(query_target.includes(department.name)){
                    departmentElements = removeQueryElement(query_target, department.name);
                    isCheck = false;
                } else {
                    departmentElements = addQueryElement(query_target, department.name);
                    isCheck = true;
                }
                filterQuery = updateQueryElement(query, {'exclude':departmentElements});
            } else{
                filterQuery = updateQueryElement(query, {'exclude':department.name});
            }

            return <Link 
                        key={shortid.generate()}
                        className="filter-box__input-container filter-box__input-container--hover"
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
                    Search
                </div>
                <div className="filter-box__input-container">
                    <input type="text" placeholder="search name..."/>
                </div>
        		<div className="filter-box__group-name">
        			Departments
        		</div>
        		{departmentFilter}
        		<div className="filter-box__group-name">
        			Employment Status
        		</div>
        		<Link 
                    className="filter-box__input-container filter-box__input-container--hover">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"
                        defaultChecked />
        			<div className="filter-box__input-name">Active Employees</div>
        		</Link>
        		<Link className="filter-box__input-container filter-box__input-container--hover">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"/>
        			<div className="filter-box__input-name">In-active Employees</div>
        		</Link>
        		<Link className="filter-box__input-container filter-box__input-container--hover">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"/>
        			<div className="filter-box__input-name">Both</div>
        		</Link>
        	</div>
        </Sticky>
      </div>
    )
  }
}