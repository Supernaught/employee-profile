import React, { Component } from 'react';
import classnames from 'classnames';

import './index.css';

export default class LoadingIcon extends Component {
	render() {
		return (
			<svg 
				className={classnames('loading-icon', this.props.className)} 
				preserveAspectRatio="xMidYMid" 
				viewBox="0 0 60 60">
				<g className="loading-icon__rotator">
					<circle className="loading-icon__circle loading-icon__circle--offset-anim" 
							cx="30" 
							cy="30" 
							r="17" 
							strokeDasharray="107" 
							strokeDashoffset="160" />
				</g>
			</svg>
			)
	}
}
