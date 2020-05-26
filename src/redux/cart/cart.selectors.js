import { createSelector } from 'reselect';

//2 types of selectors: input and output
//input:
const selectCart = state => state.cart; //one level deep only

//output. Memoize selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity, 0)
)