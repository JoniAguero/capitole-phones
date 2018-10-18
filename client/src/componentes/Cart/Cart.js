import React, { Component } from 'react';

import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import { getItemsFromCart } from './../../actions/cart/cartActions';

class Cart extends Component {

    render() {
        return (
            <IconButton color="inherit">
                <Badge badgeContent={this.props.cart.length} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        )
  }
}

const mapStateToProps = state => ({
    cart: state.cart.items
})
 
export default connect(mapStateToProps, {getItemsFromCart})(Cart);
