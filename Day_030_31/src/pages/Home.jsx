import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Card = ({ id, image, title, category, price }) => {
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

const Home = () => {
  const { areFetched, productsArray } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!areFetched) {
      dispatch(fetchProducts());
    }
  }, [dispatch, areFetched]);
  if (areFetched) console.log(productsArray);
  return (
    <div className="pb-24 px-4">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 lg:px-28">
        {productsArray.map(({ id, image, title, category, price }) => (
          <Card
            key={id}
            id={id}
            image={image}
            title={title}
            category={category}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
