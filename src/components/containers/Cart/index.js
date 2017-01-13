import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../../../actions/cartAction';
import Shelf from '../../presentational/Shelf';

class Cart extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const CartItems = this.props.cart.map((item, idx) => {
			return <li key={idx}>{item}</li>
		});

		return (
			<div className="cart">
				<Shelf addItem={this.props.action.addToCart} />
				<h2>Cart Items</h2>
				<ol>
					{CartItems}
				</ol>
			</div>
			)
	}
}

function mapStateToProps(state, prop) {
	return {
		cart: state.cart
	}
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(CartActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);