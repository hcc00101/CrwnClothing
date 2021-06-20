import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
/*import CustomButton from '../custom-button/custom-button.component';*/
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { tonggleCartHidden } from '../../redux/cart/cart.actions';
/*import './cart-dropdown.styles.scss';*/
import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from './cart-dropdown.styles';

/*const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <span className='empty-message'>Your Cart Is Empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(tonggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);*/

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <EmptyMessageContainer>Your Cart Is Empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(tonggleCartHidden());
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));