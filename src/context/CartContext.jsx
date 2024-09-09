import React, {createContext, useContext, useState} from 'react';
const CartContext = createContext();
export default function CartContextProvider({children}) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    // Check if the item is already in the cart
    const itemExists = cartItems.find(cartItem => cartItem.id === item.id);

    if (!itemExists) {
      setCartItems([...cartItems, item]);
      console.log(`${item.name} added to the cart!`);
    } else {
      const updatedCartItems = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? {...cartItem, quantity: cartItem.quantity + 1} // Increment quantity
          : cartItem,
      );
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = itemId => {
    const filteredCart = cartItems.filter(cartItem => cartItem.id !== itemId);
    setCartItems(filteredCart);
    console.log(`Item with id ${itemId} removed from the cart.`);
  };
  return (
    <CartContext.Provider
      value={{addToCart, cartItems, setCartItems, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook to use the CartContext
export const useCart = () => useContext(CartContext);
