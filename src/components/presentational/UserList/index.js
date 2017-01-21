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
		const userList = [{'inactive':true, 'name':'Davy Jones Bolivar', 'position':'Developer', 'birthdate':'october 21, 1992', 'image':"http://i.imgur.com/BgC2FVK.png"},
						  {'inactive':false, 'name':'Alfonz Montelibano', 'position':'Developer', 'birthdate':'october 21, 1992', 'image':"https://scontent.fmnl4-5.fna.fbcdn.net/v/t31.0-8/15774858_10153877798185904_8442868469936076616_o.jpg?_nc_eui2=v1%3AAeHjYbHmFlzExzcD2SD0vHJhm-sT58gKQCQjUhFCwKXGi64a7rp-GlytGxaTlXAUNw2pHoy2-9O2Hx8E2XPuJ5sYsMfU80JbGCLpllI6WqXi6w&oh=4ff2972029c28a8cd201c63f1a94340b&oe=59111282"},
						  {'inactive':false, 'name':'Junry Roma', 'position':'Developer', 'birthdate':'october 21, 1992', 'image':'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/12729040_10205948806343380_955651828098085912_n.jpg?_nc_eui2=v1%3AAeEHwkH6yoQVs-QGzAKwIGY3LJIIMgusUjyw35TmvlHxaQuTtnZq8JWvrR80A-c1AS_uRkuFET_t_ED0OUUkK0U_1OeAbHsThTAmEj2PERYLRw&oh=ee66684271eba0244748b65129280bc2&oe=591E989B'},
						  {'inactive':false, 'name':'Geraldine Bacang', 'position':'Developer', 'birthdate':'october 21, 1992', 'image':null},
						  {'inactive':false, 'name':'Howard Meija', 'position':'3DCG', 'birthdate':'october 21, 1992', 'image':null},
						  {'inactive':false, 'name':'April John Maraat', 'position':'Developer', 'birthdate':'october 21, 1992', 'image':'http://i.imgur.com/9Mz35Bb.png'},
						  {'inactive':false, 'name':'Theodore Toribio Rojas', 'position':'Audio Editor', 'birthdate':'october 21, 1992', 'image':null},
						  {'inactive':false, 'name':'Jade Droppy', 'position':'Accountant', 'birthdate':'october 21, 1992', 'image':null},
						  {'inactive':false, 'name':'Joann Gecale', 'position':'Developer', 'birthdate':'october 21, 1992', 'image':null},
						  {'inactive':false, 'name':'Richard Vergis', 'position':'Developer', 'birthdate':'october 21, 1992', 'image':null},
						  {'inactive':false, 'name':'Mina Kitajima', 'position':'Manager', 'birthdate':'october 21, 1992'},
						  {'inactive':true, 'name':'other guy', 'position':'Audio Editor', 'birthdate':'october 21, 1992', 'image':null}];
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