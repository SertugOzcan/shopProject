/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";
import { FaShoppingCart } from "react-icons/fa";

import "./CartModal.css"; // Modal için gerekli CSS dosyasını içe aktarın

function ShoppingCart() {
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen); // Modal durumunu tersine çevir
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cart">
      {/* Alışveriş ikonu ve tıklama olayı */}
      <div className="shopping-icon" onClick={openModal}>
        <FaShoppingCart />
      </div>
      

      {/* Modal içeriği */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
