import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import "../Products/products.css";

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=15");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, []);
  return (
    <>
      <Hero />
      <div className="divider"></div>
      <span className="product-subheading">Shop Now ...</span>
      <div className="products">
        {products.map((product) => {
          const { id, title, price, category, image } = product;
          return (
            <Link to={`products/${id}`} key={id} className="product">
              <img src={image} alt={title} />
              <div className="product-details">
                <h3>
                  {title} ({category})
                </h3>
                <p>RS. {price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Products;
