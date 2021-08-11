import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { Card } from "../components/Cards";

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
