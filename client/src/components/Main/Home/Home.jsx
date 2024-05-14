import { useEffect, useState, useContext } from "react";
//import axios from "axios";
import ProductList from "../ProductList/ProductList";
import { ProductsContext } from "../../../context/ProductsContext";

function Home() {
  // eslint-disable-next-line no-unused-vars
  const { productList } = useContext(ProductsContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [currentPage, setCurrentPage] = useState(1); // Nuevo: Estado para la página actual


  const getProducts = async () => {
    try {
      const resp = await fetch(`http://localhost:5000/api/products`);
      const data = await resp.json();
      setProducts(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProducts(); 
  }, []);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}
export default Home;
