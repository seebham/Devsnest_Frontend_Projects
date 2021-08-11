import { ArrowSmRightIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";

export const Card = ({ id, image, title, category, price }) => {
  return (
    <div className="flex flex-row p-4 ring-2 rounded-md">
      <img className="w-1/3" src={image} alt="Product" />
      <div className="flex flex-col flex-grow justify-between ml-4 capitalize">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="font-light">{category}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="font-semibold">₹ {(price * 70).toFixed(2)}</div>
          <Link
            to={`/product/${id}`}
            className="inline-flex justify-center items-center font-extrabold text-pink-400"
          >
            View <ArrowSmRightIcon className="ml-1 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const DetailedCard = ({
  id,
  image,
  title,
  category,
  price,
  desc,
  addToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col md:flex-row items-center p-4 ring-2 rounded-md">
      <img className="w-1/3" src={image} alt="Product" />
      <div className="flex flex-col flex-grow justify-between ml-4 capitalize">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="font-light">{category}</div>
        </div>
        <div className="">{desc}</div>
        <Quantity quantity={quantity} setter={setQuantity} />
        <div className="flex flex-row justify-between gap-2 md:gap-8">
          <div className="font-semibold flex-grow">
            ₹ {(price * 70).toFixed(2)}
          </div>
          <div
            className="inline-flex justify-center items-center font-extrabold text-pink-400 cursor-pointer"
            onClick={() => console.log("Add to Wishlist")}
          >
            Add to Wishlist <ArrowSmRightIcon className="ml-1 h-5" />
          </div>
          <div
            onClick={() => addToCart(quantity)}
            className="inline-flex justify-center items-center font-extrabold text-pink-400 cursor-pointer"
          >
            Add to Cart <ArrowSmRightIcon className="ml-1 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
