import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import FilterBox from '../FilterBox';
import UserList from '../UserList';
import Header from '../../containers/HeaderContainer';
import { getUsers } from '../../../api/user-api';

import './index.css';

import { StickyContainer } from 'react-sticky';

let searchPageRouteListener = null;

export default class SearchPage extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);
		this.handleFetchResult();
		searchPageRouteListener = browserHistory.listen( location => {
			this.handleFetchResult();
		} );
	}

	componentWillUnmount() {
		searchPageRouteListener();
	}

/*
 *	handleFetchResult sets the new value for result based 
 	on the parameters passed in the query route
 */
	handleFetchResult() {
		this.props.actions.setSearchResult(getUsers(browserHistory.getCurrentLocation().query.search));
	}

	render() {
		const searchQuery = this.props.location.query.search;
		const searchDisplay = (searchQuery === undefined || searchQuery.trim().length <= 0) 
							? "Employees" 
							: <span className="content-head__display-input content-head__display-input--light-text">
								{searchQuery}
							  </span>
		return (
			<div className="content page">
				<Header noSearch={true} />
				<div className="content-head content-head--theme-color">
					<div className="content__wrapper content__wrapper--title">
						<h1 className="content-head__title content-head__title--light-text">
							Find {searchDisplay}
						</h1>
					</div>
				</div>
				<StickyContainer className="search-page content__wrapper">
					<FilterBox {...this.props} />
					<div className="search-page__section">
						<UserList result={this.props.result} />
					</div>
				</StickyContainer>
			</div>
			)
	}
}