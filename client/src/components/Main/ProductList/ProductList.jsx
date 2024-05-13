// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCard from "../ProductList/ProductCard";

function ProductList({ products }) {
  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
