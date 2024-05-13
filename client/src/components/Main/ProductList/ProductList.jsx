import React, { useState } from "react";
import ProductCard from "../ProductList/ProductCard";

function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Número de productos por página

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortedProducts = () => {
    switch (sortOption) {
      case "priceAsc":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceDesc":
        return [...products].sort((a, b) => b.price - a.price);
      case "titleAsc":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "titleDesc":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

  const filteredProducts = sortedProducts().filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="selectOrder" value={sortOption} onChange={handleSortChange}>
          <option value="default">Ordenar por</option>
          <option value="priceAsc">Precio (Menor a Mayor)</option>
          <option value="priceDesc">Precio (Mayor a Menor)</option>
          <option value="titleAsc">Título (A-Z)</option>
          <option value="titleDesc">Título (Z-A)</option>
        </select>
      </div>
      <section>
        {currentProducts.map((product) => (
          <ProductCard key={product.id_product} product={product} />
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
      />
    </>
  );
}

function Pagination({ currentPage, onPageChange, totalProducts, productsPerPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
          <button onClick={() => onPageChange(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
