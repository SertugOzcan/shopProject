/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseProductAmount, decreaseProductAmount, removeFromCart } from '../redux/actions';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const amount = useSelector(state => {
    const item = state.cartProducts.find(item => item.id === product.id);
    return item ? item.amount : 0;
  });

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncreaseAmount = () => {
    dispatch(increaseProductAmount(product));
  };

  const handleDecreaseAmount = () => {
    dispatch(decreaseProductAmount(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Fiyat: ${product.price}</p>
      <div className="button-container">
        {amount === 0 ? (
          <button className= "addtocartbtn" onClick={handleAddToCart}>Add to Cart</button>
        ) : (
          <>
            <button className="minus" onClick={amount === 1 ? handleRemoveFromCart : handleDecreaseAmount}>-</button>
            <span className="amount">{amount}</span>
            <button className="plus" onClick={handleIncreaseAmount}>+</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;



