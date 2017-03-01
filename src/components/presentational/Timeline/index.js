import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.css';

export default class Timeline extends Component {
	
	render() {
		return (
			<div>
				<ul className="timeline">
					<div className="timeline__label">
						<span className="timeline__label-text timeline__label-text--emphasize">February</span>
						<span className="timeline__label-text">2017</span>
					</div>
					<div className="timeline-event">
						<div className="timeline-event__section timeline-date">
							<h4 className="timeline-date__date timeline-date__date--bold">10</h4>
							<div className="timeline-date__date timeline-date__date--s">FEB</div>
							<div className="timeline-date__date timeline-date__date--sub-text">sun</div>
						</div>
						<div className="timeline-event__section timeline-event__content">adsfsda</div>
					</div>
					<div className="timeline-event">
						<div className="timeline-event__section timeline-date">
							<h4 className="timeline-date__date timeline-date__date--bold">09</h4>
							<div className="timeline-date__date timeline-date__date--s">FEB</div>
							<div className="timeline-date__date timeline-date__date--sub-text">sat</div>
						</div>
						<div className="timeline-event__section timeline-event__content">adsfsda</div>
					</div>
					<div className="timeline-event">
						<div className="timeline-event__section timeline-date">
							<h4 className="timeline-date__date timeline-date__date--bold">08</h4>
							<div className="timeline-date__date timeline-date__date--s">FEB</div>
							<div className="timeline-date__date timeline-date__date--sub-text">fri</div>
						</div>
						<div className="timeline-event__section timeline-event__content">adsfsda</div>
					</div>
					<div className="timeline__label">
						<span className="timeline__label-text timeline__label-text--emphasize">January</span>
						<span className="timeline__label-text">2017</span>
					</div>
					<div className="timeline-event timeline-event--late">
						<div className="timeline-event__section timeline-date">
							<h4 className="timeline-date__date timeline-date__date--bold">09</h4>
							<div className="timeline-date__date timeline-date__date--s">JAN</div>
							<div className="timeline-date__date timeline-date__date--sub-text">sat</div>
						</div>
						<div className="timeline-event__section timeline-event__content">adsfsda</div>
					</div>
					<div className="timeline-event">
						<div className="timeline-event__section timeline-date">
							<h4 className="timeline-date__date timeline-date__date--bold">08</h4>
							<div className="timeline-date__date timeline-date__date--s">Jan</div>
							<div className="timeline-date__date timeline-date__date--sub-text">fri</div>
						</div>
						<div className="timeline-event__section timeline-event__content">adsfsda</div>
					</div>
				</ul>
				<button className="timeline-button">Load More</button>
			</div>
		)
	}
}