/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CardContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  

  const addToCart = (bull) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === bull.id);
    let updatedCart;

    if (existing) {
      updatedCart = prevCart.map((item) =>
        item.id === bull.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      updatedCart = [...prevCart, { ...bull, qty: 1 }];
    }

    // ✅ LocalStorage me save karo
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  });
  };
    
      // ✅ LocalStorage se cart uthao on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Remove item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Increase Qty
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ✅ Decrease Qty
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // ✅ Clear cart after checkout
  const clearCart = () => setCart([]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQty,
    decreaseQty,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CardContext;
