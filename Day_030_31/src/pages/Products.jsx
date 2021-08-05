import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  console.log(id);
  return <h1 className="text-4xl">Products</h1>;
};

export default Products;
