import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentProduct } from "../store/productsSlice";

const Products = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchCurrentProduct(id));
  }, [dispatch, id]);
  console.log(currentProduct);
  return <div className="container min-h-full"></div>;
};

export default Products;
