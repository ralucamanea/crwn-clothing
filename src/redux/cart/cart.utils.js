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