export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {
        //modify the array accordingly
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem);
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    }
}

export const removeItemFromCartUtil = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        //remove it
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    } else {
        //decrease the quantity
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem);
    }
}