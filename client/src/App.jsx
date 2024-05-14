// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ProductsContext } from "./context/ProductsContext"
import  "./styles/styles.scss"
// import './App.css'
// import { Router } from 'express'

function App() {
  const [products, setProducts] = useState([]);
  
  return (
    <>
      <BrowserRouter>
      <ProductsContext.Provider value={{ products, setProducts }}>
          <Header />
          <Main />
          <Footer />
</ProductsContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
