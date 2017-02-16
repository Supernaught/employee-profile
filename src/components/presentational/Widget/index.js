import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';

import './index.css';

export default class Widget extends Component {

	render() {
		return (
				<StickyContainer className="widget">
					<Sticky className="widget__container">
						{this.props.children}
					</Sticky>
				</StickyContainer>
			)
	}
}