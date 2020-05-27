import {createSelector} from 'reselect';

const collectionsSelector = state => state.shop;

export const selectShopCollections=createSelector(
    [collectionsSelector],
    shop => shop.collections
)