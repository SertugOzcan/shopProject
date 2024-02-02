/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from '../redux/actions';
import './ShoppingCart.css';

function ShoppingCart({ isOpen, toggleCart }) {
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleBuyNow = () => {
    dispatch(resetCart());
    toggleCart(); // Sepeti kapat
  };

  return (
    <div className={`shopping-cart-container ${isOpen ? 'open' : ''}`}>
      <div className="shopping-cart-content">
        <span className="close" onClick={toggleCart}>
          &times;
        </span>
        <h2>Alışveriş Sepeti</h2>
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <span>
                {product.title} - {product.amount} adet
              </span>
              <span>${product.price * product.amount}</span>
              <button onClick={() => handleRemoveFromCart(product)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h3>
          Total: $
          {cartProducts.reduce(
            (total, product) => total + product.price * product.amount,
            0
          )}
        </h3>
        <button onClick={() => handleBuyNow()}>Satın Al</button>
      </div>
    </div>
  );
}

export default ShoppingCart;

