import React, { PropTypes, Component } from 'react';

export default class Shelf extends Component {
	constructor(props) {
		super(props);
		// this.handleClick = this.handleClick.bind(this);
		this.state = {
			shelfItems: [
				'shampoo',
				'chocolate',
				'yogurt'
			]
		};
	}

	handleClick(item) {
		this.props.addItem(item);
	}

	render() {
		const shelfItems = this.state.shelfItems.map((item, idx) => {
			return <li key={idx}>
				   		<button onClick={()=>this.handleClick(item)}>[+]</button>
				   		{item}
				   	</li>
		});

		return (
			<div>
				<h1>Items</h1>
				<ul>
					{ shelfItems }
				</ul>
			</div>
			)
	}
}