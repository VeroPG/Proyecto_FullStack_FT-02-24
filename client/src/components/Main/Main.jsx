// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Details/Details";

const Main = ({ products }) => {
  return (
    <>
      <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id_product"  element={<Details products={products} />}  />
          </Routes>
      </main>
    </>
  );
};

export default Main;
