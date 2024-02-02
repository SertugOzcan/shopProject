/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "./ShoppingCart";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartProducts = useSelector((state) => state.cartProducts);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const itemCount = cartProducts.reduce(
    (total, product) => total + product.amount,
    0
  );

  return (
    <nav className="navbar">
      <ul>
        <li className="anasayfa">
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/products">Ürünler</Link>
        </li>
      </ul>
      {/* Sepet sayacı */}
      <div className="cart-counter">
        <span>{itemCount}</span>
      </div>
      <div className="shopping-cart-icon" onClick={toggleCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>

      <ShoppingCart isOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
}

export default Navbar;
