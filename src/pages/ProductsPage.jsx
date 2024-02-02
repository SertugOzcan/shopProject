/* eslint-disable no-unused-vars */
// ProductsPage.js
import React from 'react';
import ProductCard from '../components/ProductCard'; // veya doğru yolu belirtin
import data from '../data/product-data'; // data.json dosyasını içe aktarın

function ProductsPage() {
  const products = data.products; // data.json'dan ürünleri alın

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
