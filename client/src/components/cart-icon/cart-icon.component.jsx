import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { tonggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
/*import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';*/
/*import './cart-icon.styles.scss';*/
import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

/*const CartIcon = ({ tonggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={tonggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);*/

const CartIcon = ({ tonggleCartHidden, itemCount }) => (
    <CartContainer onClick={tonggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    tonggleCartHidden: () => dispatch(tonggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);