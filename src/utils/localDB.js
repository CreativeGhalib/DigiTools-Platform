const getAllCartListFromLocalDB = () => {
  const allCartList = localStorage.getItem("cartList");

  if (allCartList) return JSON.parse(allCartList);

  return [];
};

const setCartToLocalDB = (cartItems) => {
  // cart data ta local storage e save korte chai
  localStorage.setItem("cartList", JSON.stringify(cartItems));
};

export { getAllCartListFromLocalDB, setCartToLocalDB };
