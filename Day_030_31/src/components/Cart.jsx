import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import { XIcon, ShoppingCartIcon } from "@heroicons/react/outline";

//styles
const iconsStyles = "h-6 w-6 md:h-8 md:w-8";

export const Cart = ({ isOpen }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed bottom-0 left-0 w-full border-t-4 border-purple-600 rounded-t-3xl bg-gray-800 p-4 transition-all ease-in-out duration-700 transform ${
        isOpen ? "h-2/3 md:h-1/3" : "h-14 sm:h-16"
      } flex flex-col`}
    >
      {isOpen ? (
        <XIcon className={iconsStyles} onClick={() => dispatch(toggleCart())} />
      ) : (
        <ShoppingCartIcon
          className={iconsStyles}
          onClick={() => dispatch(toggleCart())}
        />
      )}
    </div>
  );
};
