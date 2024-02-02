/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ShoppingCart from './ShoppingCart';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Modal durumunu tersine çevir
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Anasayfa</Link></li>
        <li><Link to="/products">Ürünler</Link></li>
      </ul>
      
      {/* Sepet ikonunu buraya ekle */}
      <div className="shopping-icon" onClick={toggleModal}>
        <FaShoppingCart />
      </div>

      {/* Sepet modal'ını buraya ekle */}
      {isModalOpen && <ShoppingCart />}
    </nav>
  );
}

export default Navbar;
