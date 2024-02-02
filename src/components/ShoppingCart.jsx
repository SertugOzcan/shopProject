/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart, increaseProductAmount, decreaseProductAmount } from '../redux/actions';
import './ShoppingCart.css';

function ShoppingCart({ isOpen, toggleCart }) {
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleBuyNow = () => {
    dispatch(resetCart());
    toggleCart(); 
  };

  const handleIncreaseAmount = (product) => {
    dispatch(increaseProductAmount(product));
  };

  const handleDecreaseAmount = (product) => {
    dispatch(decreaseProductAmount(product));
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
              <div className="product-info">
                <img src={product.thumbnail} alt={product.title} /> {}
                <span className='quantity'>
                  {product.title} - {product.amount} adet
                </span>
                <span>${product.price * product.amount}</span>
              </div>
              <div>
                <button className='removebtn' onClick={() => handleRemoveFromCart(product)}>
                  Remove
                </button>
                <button className='plus' onClick={() => handleIncreaseAmount(product)}>+</button>
                <button className="minus" onClick={() => product.amount === 1 ? handleRemoveFromCart(product) : handleDecreaseAmount(product)}>-</button>
              </div>
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
        <button className='satınbtn' onClick={() => handleBuyNow()}>Satın Al</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
