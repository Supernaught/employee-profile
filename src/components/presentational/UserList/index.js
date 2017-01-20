import React, { Component } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

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
		const userList = [{'name':'davy bolivar', 'position':'developer', 'birthdate':'october 21, 1992'},
						  {'name':'alfonz montelibano', 'position':'developer', 'birthdate':'october 21, 1992'},
						  {'name':'junry roma', 'position':'developer', 'birthdate':'october 21, 1992'},
						  {'name':'howard meija', 'position':'3DCG', 'birthdate':'october 21, 1992'},
						  {'name':'aj maraat', 'position':'3DCG', 'birthdate':'october 21, 1992'},
						  {'name':'theodore something', 'position':'3DCG', 'birthdate':'october 21, 1992'},
						  {'name':'jade something', 'position':'3DCG', 'birthdate':'october 21, 1992'},
						  {'name':'joann gecale', 'position':'3DCG', 'birthdate':'october 21, 1992'},
						  {'name':'richard vergis', 'position':'developer', 'birthdate':'october 21, 1992'},
						  {'name':'mina kitajima', 'position':'manager', 'birthdate':'october 21, 1992'},
						  {'name':'other guy', 'position':'audio editor', 'birthdate':'october 21, 1992'}];
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

				<ListView users={userList} listType={this.state.listView} />

			</div>
			)
	}
}

class ListView extends Component {
	render() {
		const userCards = this.props.users.map((user) => {
			return <li key={shortid.generate()} className='list-container__item'>
						<img 
							src="http://i.imgur.com/mGgdRPz.png" 
							alt={user.name}
							className="list-container__item-image"/>
						<div className="list-container__detail-container">
							<div className="list-container__item-name">{user.name}</div>
							<div className="list-container__item-position">{user.position}</div>
						</div>
					</li>
		});

		return (
			<ul className={classnames('list-container', {'list-container--grid-view':!this.props.listType})}>
				{userCards}
			</ul>
		)
	}
}