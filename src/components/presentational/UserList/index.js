import React, { Component } from 'react';
import classnames from 'classnames';

import './index.css';

export default class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'listView' : true
		};
	}

	handleToggleView(bool) {
		this.setState({
			listView : bool
		});
	}

	render() {
		return (
			<div className="user-list">
				<div className="user-list__header user-list__header--space-between">
					<div className="user-list__section">
						<i className="user-list__counter">Found 0 Results</i>
					</div>
					<div className="user-list__section">
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
			</div>
			)
	}
}