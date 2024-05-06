import React, { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const productIndex = cart.findIndex((product) => product._id === item._id);
    if (productIndex !== -1) {
      cart[0].selectedQuantity += item.selectedQuantity;
    }
    else {
      setCart((prevCart) => [...prevCart, item]);
    }
    console.log(cart);
    
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getItemTotal = () => {
    return cart.reduce((total, product) => total + product.selectedQuantity, 0);
  }

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, clearCart, getItemTotal
       }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
