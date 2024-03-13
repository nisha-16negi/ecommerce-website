import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ProductDetail/productDetail.css";

export default function ProductDetails() {
  const { id } = useParams();
  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProduct();
      setProduct(fetchedProduct);
    };
    getProduct();
  }, []);

  const handleCart = (product) => {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = carts.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = carts.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...carts, { ...product, quantity: 1 }])
      );
    }
    window.location.href = "/cart";
  };
  return (
    <div className="item">
      {Object.keys(product).length > 0 && (
        <>
          <div className="item-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="item-detail">
            <h1>{product.title}</h1>
            <h2>{product.category}</h2>
            <p>{product.description}</p>
            <div className="add-to-cart-btn">
              <span className="">RS. {product.price}</span>
              <button className="" onClick={() => handleCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}