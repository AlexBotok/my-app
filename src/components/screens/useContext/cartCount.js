import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});
  const updateCartCount = (itemId, newCount) => {
    setCartData((prevCartData) => ({
      ...prevCartData,
      [itemId]: newCount,
    }));
  };

  const cartDatalength = Object.keys(cartData).length;

  const getCartCount = (itemId) => {
    return cartData[itemId] || 0;
  };

  const deleteItemFromCart = (itemId) => {
    setCartData((prevCartData) => {
      const newCartData = { ...prevCartData };
      delete newCartData[itemId];
      return newCartData;
    });
  };
  return (
    <CartContext.Provider
      value={{ cartData, updateCartCount, getCartCount, deleteItemFromCart, cartDatalength }}
    >
      {children}
    </CartContext.Provider>
  );
};
