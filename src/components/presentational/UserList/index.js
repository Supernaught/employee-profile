import React, { Component } from 'react';
import classnames from 'classnames';

import ListView from '../ListView';

import './index.css';

export default class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'listView' : true
		};
	}

	componentWillMount() {
		const localListView = localStorage.getItem('listview');
		
		if(localListView === null){
			localStorage.setItem('listview', this.state.listView);
		} else {
			const bool = (localListView === 'true')? true : false;
			this.setState({
				listView : bool
			});
		}
	}

	handleToggleView(bool) {
		this.setState({
			listView : bool
		});

		localStorage.setItem('listview', bool);
	}

	render() {
		let resultCountMessage = null;
		const count  = this.props.result.length;

		if(count <= 0) {
			resultCountMessage = 'No Result Found';
		} else if(count === 1) {
			resultCountMessage = 'Found 1 Result';
		} else if(count >= 1) {
			resultCountMessage = 'Found '+ count +' Results';
		}

		const listLabel = (!this.state.listView) ? "Grid View:" : "List View:";

		return (
			<div className="user-list">
				<div className="user-list__header user-list__header--space-between">	
					<div className="user-list__section">
						<div className="user-list__header-label">{resultCountMessage}</div>
					</div>
					<div className="list-view-option user-list__section">
						<div className="user-list__header-label">{listLabel}</div>
						<div className={
							 classnames("user-list__icon-container", {"user-list__icon-container--active" : this.state.listView})}
							 onClick={()=>this.handleToggleView(true)}>
						    <svg className="user-list__icon" viewBox="0 0 24 24">
						      	<path fill="inherit" d="M3,4H21V8H3V4M3,10H21V14H3V10M3,16H21V20H3V16Z" />
						    </svg>
					    </div>
						<div className={
							 classnames("user-list__icon-container", {"user-list__icon-container--active" : !this.state.listView})}
							 onClick={()=>this.handleToggleView(false)}>
							<svg className="user-list__icon" viewBox="0 0 24 24">
						      	<path fill="inherit" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" />
						    </svg>
					    </div>
					</div>
				</div>

				<ListView users={this.props.result} listType={this.state.listView} />

			</div>
			)
	}
}