import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { StickyContainer } from 'react-sticky';

import FilterBox from '../FilterBox';
import UserList from '../UserList';

import './index.css';

export default class SearchPage extends Component {

	componentDidMount() {
		console.log("QUERY ",this.props.location.query);
		console.log("ROUTER ",this.props.location);
		console.log("CONTAINER PROPS ",this.props)
		window.scrollTo(0, 0);
	}

	render() {
		const page = this.props.location.query.page;
		const search = this.props.location.query.search;
		return (
			<div className="content page">
				<div className="content-head">
					<div className="content__wrapper">
						<h1 className="content-head__title">Find Employees</h1>
					</div>
				</div>
				<div className="employee-page content__wrapper">
					<FilterBox />
					<div className="employee-page__section">
						<UserList />
					</div>
				</div>
			</div>
			)
	}
}