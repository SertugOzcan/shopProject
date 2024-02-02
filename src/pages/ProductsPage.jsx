/* eslint-disable no-unused-vars */

import React from 'react';
import ProductCard from '../components/ProductCard'; 
import data from '../data/product-data'; 

function ProductsPage() {
  const products = data.products; 

  return (
    <div>
      <h2>Ürünler</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
