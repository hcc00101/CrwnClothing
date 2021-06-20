import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ht2h0Ax96xtcf2Qb898qs7sHbSN33bFygo2yHGFgLyHn1XLidtf6WBCBD64dkY4NUucP4CYNQKFVrcr1qUDSeP900WDNltclY';

    const onToken = (token) => {        
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then((response) => {
            alert('Payment Sucessful.');
        }).catch((error) => {
            console.log('Payment Error : ', JSON.parse(error));
            alert('There Was An Issue With Your Payument.');
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total Is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;