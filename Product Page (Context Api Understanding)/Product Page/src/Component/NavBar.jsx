import React, { useContext, useEffect, useState } from "react";
import Cart_icon from "./Cart_icon";
import Cart from "./Cart";
import CartContext from "../Contexts/Cart";
const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const nav = ["Collections", "Men", "Women", "About", "Contact"];
  const { cartValue } = useContext(CartContext);

  function openCart() {
    setShowCart((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <div className="h-[10%] bg-white flex items-center justify-between px-5 md:px-[10%] border-b-2">
        <div>
          <h1 className="text-4xl tracking-wide font-bold">sneakers.</h1>
        </div>
        <ul className="hidden md:flex items-center gap-5 pt-1">
          {nav.map((item) => {
            return (
              <li className="opacity-70 cursor-pointer hover:opacity-100">
                {item}
              </li>
            );
          })}
        </ul>
        <div className="w-[30%] flex justify-end items-center gap-5">
          <div onClick={openCart} className="cursor-pointer relative">
            <Cart_icon />
            <div
              className={
                showCart
                  ? `h-52 bg-white shadow-xl overflow-y-scroll gap-8 border-gray-600 border-2 w-80 z-50 rounded-xl pb-2 rounded-tr-none flex flex-col items-center justify-between absolute -right-[360%] top-12`
                  : "hidden"
              }
            >
              <h1 className="text-center border-b-2 text-lg w-full border-black">
                Cart
              </h1>
              <div className="flex flex-col gap-5">
                <Cart />
              </div>
              <button className="bg-orange-600 text-white p-2 w-[50%] rounded-lg hover:bg-orange-500">
                Checkout
              </button>
            </div>
            <div
              className={
                cartValue.quantity > 0
                  ? "bg-orange-600 h-3 w-3 rounded-full border-black border-[1px] absolute -top-2 -right-1 flex justify-center items-center p-2"
                  : "hidden"
              }
            >
              <span className="text-white text-[9pt]">1</span>
            </div>
          </div>
          <div className="cursor-pointer">
            <img src="public/image-avatar.png" className="h-10" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
