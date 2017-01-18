import React, { Component } from 'react';

export default class UserList extends Component {

	render() {
		const page = this.props.location.query.page;
		const search = this.props.location.query.search;
		return (
			<div>
				--Employees List (Default Route)
				<div>Search {search}</div>
				<div>Page {page}</div>
			</div>
			)
	}
}