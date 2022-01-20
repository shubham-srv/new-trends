export const addItemToCart = (cartItems, itemToAdd) => {
  const itemFound = cartItems.find((item) => {
    return item.id === itemToAdd.id;
  });
  if (itemFound) {
    return cartItems.map((item) => {
      return item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemFound = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (itemFound.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === itemToRemove.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
};
