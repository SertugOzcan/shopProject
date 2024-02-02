/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from './ShoppingCart';

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Anasayfa</Link></li>
        <li><Link to="/products">Ürünler</Link></li>
      </ul>
      
      <div className="shopping-cart-icon" onClick={toggleCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>

      <ShoppingCart isOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
}

export default Navbar;
