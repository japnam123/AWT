
import './App.css'

import React from "react";
import ProductCard from "./components/ProductCard";

const productData = {
  name: "Smartphone XYZ",
  price: 19999,
  inStock: true,
  image: "Product1.webp",
  description: "A high-performance smartphone with an amazing display and camera."
};	

const App = () => {
  return (
    <div className="app">
      <h1>Dynamic E-commerce Product Page</h1>
      <ProductCard product={productData} />
    </div>
  );
};

export default App
