import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, loadCart } from "../store/cartSlice";
import { XIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { DetailedCard } from "./Cards";

//styles
const iconsStyles = "h-6 w-6 md:h-8 md:w-8";

export const Cart = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { openCart, cartItemsCount, cartItems } = useSelector(
    (state) => state.cart
  );
  const { openWish, wishCount, wishlist } = useSelector((state) => state.wish);
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);
  return (
    <div
      className={`fixed bottom-0 left-0 w-full border-t-4 border-purple-600 rounded-t-3xl bg-gray-800 p-4 transition-all ease-in-out duration-700 transform ${
        openCart || openWish ? "h-2/3 md:h-1/3" : "h-14 sm:h-16"
      } flex flex-col`}
    >
      {openCart || openWish ? (
        <XIcon className={iconsStyles} onClick={() => dispatch(toggleCart())} />
      ) : (
        <ShoppingCartIcon
          className={iconsStyles}
          onClick={() => dispatch(toggleCart())}
        />
      )}
      {openCart
        ? cartItems.map((item) => {
            return (
              <DetailedCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                category={item.category}
                desc={item.description}
              />
            );
          })
        : null}
    </div>
  );
};
