import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import shortid from 'shortid';

import ProfileAvatar from '../ProfileAvatar';

import './index.css';

export default class ListView extends Component {
	render() {
		const userCards = this.props.users.map((user) => {

			const inactive = (user.inactive) ? <div className="list-container__status list-container__status--inactive">Inactive</div> : null;

			return <li 
						key={shortid.generate()} 
						className={
							classnames(
								'list-container__item list-container__item--space-between',
								{'list-container__item--grid':!this.props.listType})}>
						<div className="list-container__section list-container__section--row">
							<Link className="list-container__item-image" to={"/employees/"+user.name}>
								<ProfileAvatar
									className="list-container__item-image"
									imageSrc={user.image}
									imageAlt={user.name} />
							</Link>
							<div className="list-container__section">
								<span>
									<Link 
										className="list-container__item-name"
										to={'/employees/'+user.name}>
											{user.name}
									</Link>
								</span>
								<div className="list-container__item-position">{user.position}</div>
							</div>
						</div>
						<div className="list-container__section list-container__section--align-top">
							<div className="list-container__status list-container__status--text-right">Active 12 days ago</div>

							{inactive}

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