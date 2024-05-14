import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    // eslint-disable-next-line react/prop-types
    id_product,
    title,
    thumbnail,
    description,
    price,
    rating,
    producer_id,
  } = product;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <article className="ProductsCard">
      <h3 onClick={openModal}>{title}</h3>
      <img className="img" src={thumbnail} alt={title} onClick={openModal} />

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Precio: {price} €</p>

            <p>Valoración: {rating} <i className="fa-solid fa-star"></i></p>
            
            <label className="add-fav">
              Añadir a favoritos: <input type="checkbox" />
              <i className="fa-solid fa-heart"></i>
            </label>
            <p>Productor: {producer_id.producer_name}</p>
          </div>
        </div>
      )}
    </article>
  );
}

export default ProductCard;
