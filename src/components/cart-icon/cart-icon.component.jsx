import React from 'react';
import { connect } from 'react-redux';
import { tonggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ tonggleCartHidden }) => (
    <div className='cart-icon' onClick={tonggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    tonggleCartHidden: () => dispatch(tonggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);