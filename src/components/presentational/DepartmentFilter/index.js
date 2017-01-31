import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link } from 'react-router';
import shortid from 'shortid';

import { updateQueryElement, addQueryElement, removeQueryElement } from '../../../methods/routesHelper.js';

export default class FilterBox extends Component {

    render() {
        this.props.handleQuery(this.props.location.query);

        const pathname = this.props.location.pathname;
        const query = this.props.location.query;
        let query_target = this.props.location.query.exclude;
        let isDepartmentCheck = true;
        let filterQuery = '';

        const departmentFilter = this.props.departments.map((department) => {

            let departmentElements = '';

            if(query_target !== undefined) {
                if(query_target.includes(department.name)) {
                    departmentElements = removeQueryElement(query_target, department.name);
                    isDepartmentCheck = false;
                } else {
                    departmentElements = addQueryElement(query_target, department.name);
                    isDepartmentCheck = true;
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
                            defaultChecked={isDepartmentCheck} />
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