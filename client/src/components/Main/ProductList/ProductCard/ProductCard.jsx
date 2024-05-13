// eslint-disable-next-line no-unused-vars
import React from "react";
//import {Link} from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div>
      <h3>HOLIIIIIII</h3>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      {/* Otros detalles del producto */}
    </div>
  );
}

export default ProductCard;
