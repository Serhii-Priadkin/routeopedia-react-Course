import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import CreateProduct from "./Pages/CreateProduct";
import ProductDetails from "./Pages/ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/list" element={<ProductList/>}></Route>
        <Route path="/product/create" element={<CreateProduct/>}></Route>
        <Route path="/product/details" element={<ProductDetails/>}></Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
