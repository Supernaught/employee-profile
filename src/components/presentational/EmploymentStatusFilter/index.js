import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link, browserHistory } from 'react-router';
import shortid from 'shortid';

export default class FilterBox extends Component {

    render() {
        const departmentFilter = this.props.userStatus.map((status) => {

            const newLocation = Object.assign(browserHistory.getCurrentLocation());
            let isChecked = false;

            if(newLocation.query['status'] !== undefined && newLocation.query['status'].trim() === status.name) {
                isChecked = true;
            } else if(newLocation.query['status'] === undefined && status.name === 'both') {
                isChecked = true;
            }

            newLocation.query['status'] = status.name;

            return <Link 
                        key={shortid.generate()}
                        className="filter-box__input-container filter-box__input-container--hover"
                        to={newLocation}>
                        <input 
                            className="filter-box__checkbox" 
                            type="checkbox" 
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