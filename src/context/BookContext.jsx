import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllCartListFromLocalDB, setCartToLocalDB } from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getAllCartListFromLocalDB());
  const [activeView, setActiveView] = useState("products");

  const addToCart = (product) => {
    // step 1: check this product is already in cart or not
    const isExistProduct = cartItems.find((item) => item.id === product.id);

    if (isExistProduct) {
      toast.error("This product is already in the cart");
      return;
    }

    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId) => {
    // cart theke selected product remove korar jonno
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    toast.info("Product removed from cart");
  };

  const clearCart = () => {
    // proceed to checkout e sob product clear hoye jabe
    if (cartItems.length === 0) {
      toast.error("Your cart is already empty");
      return;
    }

    setCartItems([]);
    toast.success("Proceed to checkout completed");
  };

  useEffect(() => {
    setCartToLocalDB(cartItems);
  }, [cartItems]);

  const data = {
    cartItems,
    setCartItems,
    activeView,
    setActiveView,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
