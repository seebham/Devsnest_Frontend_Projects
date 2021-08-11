import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentProduct } from "../store/productsSlice";
import { DetailedCard } from "../components/Cards";
import { addToCart } from "../store/cartSlice";

const Products = () => {
  const { ItemId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentProduct(ItemId));
  }, [dispatch, ItemId]);
  const { currentProduct } = useSelector((state) => state.products);
  console.log(currentProduct);
  const handleAddToCart = (quantity) => {
    dispatch(addToCart({ ...currentProduct, quantity: quantity }));
  };
  return (
    <div className="container min-h-full">
      {currentProduct ? (
        <DetailedCard
          key={currentProduct.id}
          id={currentProduct.id}
          title={currentProduct.title}
          image={currentProduct.image}
          price={currentProduct.price}
          category={currentProduct.category}
          desc={currentProduct.description}
          addToCart={handleAddToCart}
        />
      ) : null}
    </div>
  );
};

export default Products;
