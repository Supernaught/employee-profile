import React, { Component } from 'react';

import Header from '../../containers/HeaderContainer';

export default class Home extends Component {

	render() {
		return (
			<div className="content page">
				<Header />
				<div className="content__wrapper">
					*Home
				</div>
			</div>
			)
	}
}