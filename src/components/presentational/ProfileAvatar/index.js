import React, { Component } from 'react';
import classnames from 'classnames';


import defaultavatar from './default_avatar.jpg';

import './index.css';

export default class ProfileAvatar extends Component {
	render() {
		const image = (String(this.props.src).trim().length <= 0 
						 		|| this.props.src === null 
						 		|| this.props.src === undefined) 
									? defaultavatar : this.props.src;
		return (
			<img 
				className={classnames('user-avatar', this.props.className)} 
				src={image} 
				alt={this.props.alt} />
		)
	}
}