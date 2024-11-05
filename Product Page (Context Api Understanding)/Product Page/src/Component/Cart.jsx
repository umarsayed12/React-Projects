import React, { useContext } from "react";
import CartContext from "../Contexts/Cart";
const Cart = () => {
  const { cartValue } = useContext(CartContext);

  if (cartValue.quantity > 0)
    return (
      <div className="h-12 w-full flex gap-3 border-t-2 py-2">
        <div>
          <img src="image-product-1.jpg" className="h-12" alt="" />
        </div>
        <div>
          <div>
            <h1 className="font-normal text-gray-500 text-md">
              Fall Limited Edition Sneakers
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">
              $125.00 x {cartValue.quantity}
            </span>
            <span className="font-bold">${125.0 * cartValue.quantity}.00</span>
          </div>
        </div>
      </div>
    );
  else return <></>;
};

export default Cart;
