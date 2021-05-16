import React from 'react';
import { connect } from 'react-redux';
/*import CustomButton from '../custom-button/custom-button.component';*/
import { addItem } from '../../redux/cart/cart.actions';
/*import './collection-item.sytles.scss';*/
import { CollectionItemContainer, CollectionFooterContainer, AddButton, BackgroundImage, NameContainer, PriceContainer } from './collection-item.sytles';

/*const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
};*/

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);