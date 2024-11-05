import { useState } from "react";
import CartContext from "./Cart";

const CartContextProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);
  return (
    <CartContext.Provider value={{ cartValue, setCartValue }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
