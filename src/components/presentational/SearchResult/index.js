import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

export default class SearchResult extends Component {

	render() {
		return (
			<li key={this.props.key} 
				className="searchbox__result"
				onClick={this.props.handleClick}>
				<Link
					className="searchbox__result__item"
					to={"/employees/"+this.props.username}>
					<span className="searchbox__result__item__name">
						<strong>{this.props.firstname +' '+this.props.lastname}</strong>
					</span>
					<span className="searchbox__result__item__label">{this.props.position}</span>
				</Link>
			</li>
		)
	}
}