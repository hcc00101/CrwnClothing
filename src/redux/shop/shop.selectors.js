import { createSelector } from 'reselect';

//<<METHOD ONE WITH ARRAY//
/*const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}*/
//METHOD ONE WITH ARRAY>>//

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    //<<METHOD ONE WITH ARRAY//
    /*collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])*/
    //METHOD ONE WITH ARRAY>>//

    //<<METHOD TWO WITH OBJECT//
    collections => collections[collectionUrlParam]
    //METHOD TWO WITH OBJECT>>//
);