import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import shortid from 'shortid';

import ProfileAvatar from '../ProfileAvatar';

import './index.css';

export default class ListView extends Component {
	render() {
		const userCards = this.props.users.map((user) => {

			const Inactive = (!user.inactive) ? null :
								<div className={
									classnames(
										"list-container__status list-container__status--inactive",
										{"list-container__status--no-border" : !this.props.listType})}>
									Inactive
								</div>;

			return <li 
						key={shortid.generate()} 
						className={
							classnames(
								"list-container__item",
								{"list-container__item--space-between" : this.props.listType,
								 "list-container__item--space-top"	   : !this.props.listType},
								{"list-container__item--grid" 		   : !this.props.listType})}>
						<div className={
								classnames("list-container__section",
										   "list-container__section--row",
										   {"list-container__section--stretch-width" : !this.props.listType})}>
							<Link className={
									classnames(
										"list-container__item-image",
										{'list-container__item-image--small' : !this.props.listType})} 
								  to={"/employees/"+user.name}>
								<ProfileAvatar
									className={
										classnames(
											"list-container__item-image",
											{'list-container__item-image--small' : !this.props.listType})}
									imageSrc={user.image}
									imageAlt={user.name} />
							</Link>
							<div className="list-container__section">
								<span>
									<Link 
										className={
											classnames(
												"list-container__item-name",
												{"list-container__item-name--small-text" : !this.props.listType})}
										to={'/employees/'+user.name}>
											{user.name}
									</Link>
								</span>
								<div className={
										classnames(
											"list-container__item-position",
											{"list-container__item-position--small-text" : !this.props.listType})}>
									{user.position}
								</div>
							</div>
						</div>
						<div className={
								classnames(
									"list-container__section",
									"list-container__section--align-top",
									{"list-container__section--stick-left" : !this.props.listType},
									{"list-container__section--stretch-width" : !this.props.listType})}>
							<div className="list-container__status list-container__status--text-right">Active 12 days ago</div>

							{Inactive}

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