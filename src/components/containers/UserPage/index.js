import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class UserPage extends Component {
	render() {
		const userId = this.props.params.id;
		return (
			<div>
				--{userId} Profile
				{this.props.children}
			</div>
			)
	}
}