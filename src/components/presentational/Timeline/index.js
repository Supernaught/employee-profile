import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sticky, StickyContainer } from 'react-sticky';

import './index.css';

export default class Timeline extends Component {
	
	render() {
		return (
			<StickyContainer>
			<ul className="timeline">
				<div className="timeline__sticky-container">
					<Sticky className="timeline__sticky-header">
						<h3 className="timeline__header">
							<Link 
								className="timeline__month-header"
								to="/employees/davy?date=2017-2-1"
								onClick={this.props.handleShowMonth.bind(this, '2017-2-1')}>
								February
								<span className="timeline__year-header">2018</span>
							</Link>
						</h3>
					</Sticky>
				</div>
				<li className="timeline__item-container">
					<div className="event event--late">
						Late
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--absent">
						Absent
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--leave">
						Leave
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--holiday">
						Holiday
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--event">
						Event
					</div>
				</li>
				<div className="timeline__sticky-container">
					<Sticky className="timeline__sticky-header">
						<h3 className="timeline__header">
							<Link 
								className="timeline__month-header"
								to="/employees/davy?date=2017-1-1"
								onClick={this.props.handleShowMonth.bind(this, '2017-1-1')}>
								January
								<span className="timeline__year-header">2018</span>
							</Link>
						</h3>
					</Sticky>
				</div>
				<li className="timeline__item-container">
					<div className="event event--late">
						Late
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--absent">
						Absent
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--leave">
						Leave
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--holiday">
						Holiday
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--event">
						Event
					</div>
				</li>
				<div className="timeline__sticky-container">
					<Sticky className="timeline__sticky-header">
						<h3 className="timeline__header">
							<Link 
								className="timeline__month-header"
								to="/employees/davy?date=2016-12-1"
								onClick={this.props.handleShowMonth.bind(this, '2016-12-1')}>
								December
								<span className="timeline__year-header">2017</span>
							</Link>
						</h3>
					</Sticky>
				</div>
				<li className="timeline__item-container">
					<div className="event event--late">
						Late
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--absent">
						Absent
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--leave">
						Leave
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--holiday">
						Holiday
					</div>
				</li>
				<li className="timeline__item-container">
					<div className="event event--event">
						Event
					</div>
				</li>
			</ul>
			</StickyContainer>
		)
	}
}