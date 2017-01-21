import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import './index.css';

export default class SearchResult extends Component {

	render() {
		const ListData = this.props.data.map((item) => {
			return <li className="search-dropdown__item-container">
						<Link
							className="search-dropdown__item"
							to={"/employees/"+item.username}>
						<span className="search-dropdown__item-name">
							<strong>{item.first_name +' '+item.last_name}</strong>
						</span>
						<span className="search-dropdown__item-label">{item.position}</span>
						</Link>
					</li>
		});
		return (
			<ul className={
		            classnames(
		              "search-dropdown", 
		              {'search-dropdown--active' : this.props.activeDropDown}
		            )}>
            	{ListData}
        	</ul>
		)
	}
}