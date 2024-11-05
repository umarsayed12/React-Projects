import React, { useEffect, useState } from "react";
import IconPrevious from "../../public/IconPrevious";
import IconNext from "../../public/IconNext";
import Cart_icon from "../Component/Cart_icon";
import { useContext } from "react";
import CartContext from "../Contexts/Cart";

const ProductPage = () => {
  const imageMap = [1, 2, 3, 4];
  const [imageIndex, setImageIndex] = useState(1);
  const [isActive, setIsActive] = useState(1);

  const [quantity, setQuantity] = useState(0);

  const { setCartValue } = useContext(CartContext);

  function handleCart() {
    setCartValue({ quantity });
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  return (
    <>
      <div className="w-screen h-[90%] bg-white flex flex-col gap-14 md:gap-0 md:flex-row md:px-[10%]">
        <div className="h-[50%] w-full md:h-[100%] md:p-36 md:pt-20 flex flex-col gap-3">
          <div className="relative">
            <img
              src={`public/image-product-${isActive}.jpg`}
              className="hidden md:block md:rounded-2xl"
              alt=""
            />
            <img
              src={`public/image-product-${imageIndex}.jpg`}
              className="md:hidden"
              alt=""
            />
            <span
              onClick={() => {
                if (imageIndex === 1) setImageIndex(4);
                else setImageIndex((prev) => prev - 1);
              }}
              className="bg-white h-12 w-12 absolute top-[50%] left-2 -translate-y-[50%] rounded-3xl flex justify-center items-center pr-1 md:hidden"
            >
              <IconPrevious />
            </span>
            <span
              onClick={() => {
                if (imageIndex === 4) setImageIndex(1);
                else setImageIndex((prev) => prev + 1);
              }}
              className="bg-white h-12 w-12 absolute top-[50%] -translate-y-[50%] right-2 rounded-3xl flex justify-center items-center pl-1 md:hidden"
            >
              <IconNext />
            </span>
          </div>
          <div className="hidden md:flex justify-between p-3">
            {imageMap.map((index) => {
              return (
                <span className="h-14 w-16">
                  <img
                    src={`public/image-product-${index}.jpg`}
                    className={
                      isActive === index
                        ? `rounded-md cursor-pointer border-orange-700 border-2 opacity-50 transition-opacity ease-in-out duration-500`
                        : "rounded-md cursor-pointer border-orange-700 border-2 transition-opacity ease-in-out duration-500"
                    }
                    onMouseOver={() => setIsActive(index)}
                    onMouseOut={() => setIsActive(1)}
                    alt=""
                  />
                </span>
              );
            })}
          </div>
        </div>
        <div className="h-[50%] w-full md:h-[100%] p-5 md:py-32 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-500">SNEAKER COMPANY</h1>
            <h1 className="font-bold text-3xl">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-500 text-wrap pr-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              totam minus provident blanditiis facilis officia soluta dolorum
              molestiae, fuga tenetur perspiciatis, possimus cumque consequuntur
              distinctio ab! Praesentium porro dolorum ex temporibus dolorem!
            </p>
          </div>
          <div className="flex flex-col relative">
            <span className="text-2xl font-bold">$125.00</span>
            <span className="text-md opacity-40 line-through">$250.00</span>
            <span className="absolute left-32 bg-black text-white top-1 p-1 px-2 rounded-lg text-[10pt]">
              50% off
            </span>
          </div>
          <div className="flex flex-col md:items-center gap-3 md:flex-row">
            <div className="h-12 flex items-center justify-between bg-slate-100 shadow-inner w-full md:w-[50%]">
              <button
                onClick={decreaseQuantity}
                className="text-orange-500 hover:bg-orange-500 hover:text-white h-full text-lg font-bold w-10"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="text-orange-500 hover:bg-orange-500 hover:text-white h-full text-lg font-bold w-10"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={handleCart}
                className="w-full flex gap-3 justify-center bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600"
              >
                <Cart_icon /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
