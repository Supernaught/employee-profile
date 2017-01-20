import React, { Component } from 'react';
import classnames from 'classnames';


import defaultavatar from './default_avatar.jpg';

import './index.css';

export default class ProfileAvatar extends Component {
	render() {
		const image = (String(this.props.imageSrc).trim().length <= 0 
						 		|| this.props.imageSrc === null 
						 		|| this.props.imageSrc === undefined) 
									? defaultavatar : this.props.imageSrc;
		return (
			<img 
				className={classnames('user-avatar', this.props.className)} 
				src={image} 
				alt={this.props.imageAlt} />
		)
	}
}