import React, { useEffect, useState } from "react";
import "./cart.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [total, setTotal]=useState(0);
  const navigate = useNavigate();
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  const handleItemIcrement=(id)=>{
    const updatedCart = carts.map(cartItem=>{
      if(cartItem.id ===id){
        return{
          ...cartItem,
          quantity: cartItem.quantity +1
        }
      }
      return cartItem
    })
    localStorage.setItem('cart',JSON.stringify(updatedCart))
    navigate('/cart');
  }

  const handleItemDecrement=(id)=>{
    const updatedCart = carts.map(cartItem=>{
      if(cartItem.id ===id){
        return{
          ...cartItem,
          quantity: cartItem.quantity -1
        }
      }
      return cartItem
    })
    localStorage.setItem('cart',JSON.stringify(updatedCart))
    navigate('/cart');
  }

  const handleItemDelete=(id)=>{
      const updatedCart = carts.filter(cartItem => cartItem.id !== id)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      navigate('/cart');
  }
  const discount = total*0.2;
 const finalAmount = total+30-discount;

  useEffect(()=>{
    const total = carts.reduce((acc, item)=>{
      return acc+ (item.price * item.quantity)
    },0)
    setTotal(total)
  },[carts])

  return (
    <div>
      <div className="cart-header">
        <h1 className="">Your Cart</h1>
      </div>
      <div className="cart-container">
        <div className="cart">
          {carts?.map((cart) => {
            return (
              <div className="cart-details">
                <div className="cart-img">
                  <img src={cart?.image} alt={cart?.description} />
                </div>
                <div className="cart-name-price">
                  <h4 className="product-name">{cart?.title}</h4>
                  <h3 className="product-price">
                    RS. {cart?.price}
                  </h3>
                </div>
                <div className="product-quantity">
                  <div className="delete-btn">
                  <RiDeleteBinLine color="red" onClick={()=>handleItemDelete(cart?.id)}/>
                  </div>
                  <div className="add-or-delete-item">
                    <FaMinus className="decrement-btn" onClick={()=>handleItemDecrement(cart?.id)}/>
                    <input
                      className="cart-input"
                      type="text"
                      value={cart?.quantity}
                    />
                    <FaPlus className="increment-btn" onClick={()=>handleItemIcrement(cart?.id)}/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total-amount">
          <h1 className="order-summary">
            Order Summary
          </h1>
          <div className="subtotal">
            <span className="">Subtotal</span>
            <span className="">{total?.toFixed(2)}</span>
          </div>
          <div className="discount">
            <span className=""> Discount(20%)</span>
            <span className="">-{discount?.toFixed(2)}</span>
          </div>
          <div className="fee">
            <span className="">Delivery Fee</span>
            <span className="">30</span>
          </div>
          <div className="cart-divider"></div>
          <div className="final-total">
            <span className="">Final Total</span>
            <span className="">{finalAmount?.toFixed(2)}</span>
          </div>
          <div className="checkout">
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
