import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { tonggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ tonggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={tonggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    tonggleCartHidden: () => dispatch(tonggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);