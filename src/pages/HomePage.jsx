/* eslint-disable no-unused-vars */

import React from "react";
import ImageSlider from "../components/ImageSlider"; // veya doğru yolu belirtin
import ProductCard from "../components/ProductCard"; // veya doğru yolu belirtin
import data from "../data/product-data"; // data.json dosyasını içe aktarın

function HomePage() {
  const products = data.products;

  const slides = [
    {
      url: "./images/image-1.jpeg",
      title: "Bu indirim şimdi var",
      description: "Sonra yok ",
    },
    {
      url: "./images/image-2.jpeg",
      title: "Ev elektroniğinde",
      description: "Ayın son fırsatları",
    },
    {
      url: "./images/image-3.jpeg",
      title: "Çok iyi Laptoplar",
      description: "Alsana",
    },
    {
      url: "./images/image-4.jpeg",
      title: "Hediye var",
      description: "Al nolur",
    },
    {
      url: "./images/image-5.jpeg",
      title: "Şarj kabloları ve Powerbankler",
      description: "Fırsatlar Kaçmaz",
    },
  ];

  return (
    <>
      <div>
        <h2>Anasayfa</h2>
        <ImageSlider slides={slides} />
      </div>

      <div>
        <h2>Popüler ürünler</h2>
        <div className="product-list">
          {products
            .filter((product) => product.rating >= 4.5)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
