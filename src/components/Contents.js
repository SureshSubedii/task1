import React from 'react';
import '../styles/Contents.css';

function Contents({ products, searchData, selectedValue, price }) {
  console.log(searchData)
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchData.toLowerCase())
  );

  let displayedProducts = filteredProducts;

  if (selectedValue) {
    displayedProducts = displayedProducts.filter((product) => product.category === selectedValue);
  }

  if (price !== null) {
    const numericPrice = parseFloat(price);
    displayedProducts = displayedProducts.filter((product) => product.price < numericPrice);
  }

  if (searchData === '' || displayedProducts.length === 0) {
    return (
      <div className="contents">
        <p>No results found.</p>
      </div>
    );
  }

  return (
    displayedProducts.map((product) => (
      <div className="contents" key={product.id}>
        <img src={product.image} alt="Product" />
        <p>Id: {product.id}</p>
        <p>Title: {product.title}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
      </div>
    ))
  );
}

export default Contents;
