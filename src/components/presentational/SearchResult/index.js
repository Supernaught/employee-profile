import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import './index.css';

export default class SearchResult extends Component {

	/*
	 * markTargetString() locates the substring 
	 * and wraps it with the <mark/> tag.
	 * 
	 * returns a <strong/> dom 
	 */
	markTargetString(s) {
		const target = this.props.filter;
		const targetkIndex = s.toLowerCase().indexOf(target.toLowerCase());
		const s1 = s.substring(0, targetkIndex);
		const s2 = s.substring(targetkIndex + target.length);
		const marked = 
			<mark className="search-dropdown__item-name--mark">
				{s.substring(targetkIndex, targetkIndex + target.length)}
			</mark>;
		return <strong>{s1}{marked}{s2}</strong>;
	}

	render() {
		const ListData = this.props.data.map((item) => {
			return <li className="search-dropdown__item-container">
						<Link
							className="search-dropdown__item"
							to={"/employees/"+item.username}>
						<span className="search-dropdown__item-name">
							{this.markTargetString(item.first_name +' '+item.last_name)}
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
{/*<strong>{item.first_name +' '+item.last_name}</strong>*/}