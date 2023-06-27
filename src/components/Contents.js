import React from 'react';
import '../styles/Contents.css';

function Contents({ products, searchData, selectedValue, price }) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchData.toLowerCase())
  )

  if (!searchData || filteredProducts.length === 0) {

    return (
        <p>No results found.</p>
    );
  }

  let displayedProducts = filteredProducts;
  console.log(displayedProducts)



  if (selectedValue !== undefined && selectedValue !== '') {
    displayedProducts = displayedProducts.filter((product) => product.category === selectedValue);

  }

  if (price !== null) {
    const numericPrice = parseFloat(price);
    displayedProducts = displayedProducts.filter((product) => product.price < numericPrice);
    
  }

  return (
    <div >
      {displayedProducts.map((product) => (
        <div className="contents" key={product.id}>
          <img src={product.image} alt="Product" />
          <p>Id: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Contents;
