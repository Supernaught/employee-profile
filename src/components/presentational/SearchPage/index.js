import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import FilterBox from '../FilterBox';
import UserList from '../UserList';
import Header from '../../containers/HeaderContainer';

import './index.css';

import { StickyContainer } from 'react-sticky';

export default class SearchPage extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.actions.setSearch(this.props.location.query.search);
	}

	componentDidUpdate() {
		this.props.actions.setSearch(this.props.location.query.search);
		console.log("THIS IS THE QUERY ",browserHistory.getCurrentLocation().query);
	}

	render() {
		const searchDisplay = (this.props.search === undefined || this.props.search.trim().length <= 0) 
							? "Employees" 
							: <span className="content-head__display-input">
								{this.props.search}
							  </span>
		return (
			<div className="content page">
				<Header noSearch={true} />
				<div className="content-head">
					<div className="content__wrapper content__wrapper--title">
						<h1 className="content-head__title">
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