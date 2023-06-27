import React, { useEffect, useState } from 'react';
import '../styles/Contents.css';

function Contents({ products, searchData, selectedValue, price }) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchData.toLowerCase())
  );

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        setSelectedProductIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : 0
        );
      } else if (event.key === 'ArrowDown') {
        setSelectedProductIndex((prevIndex) =>
          prevIndex < filteredProducts.length - 1 ? prevIndex + 1 : prevIndex
        );
      }
  
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredProducts.length]);

  if (searchData === '' || filteredProducts.length === 0) {
    return <p>No results found.</p>;
  }

  let displayedProducts = filteredProducts;

  if (selectedValue !== '') {
    displayedProducts = displayedProducts.filter(
      (prod) => prod.category === selectedValue
    );
  }

  if (price != null) {
    displayedProducts = displayedProducts.filter(
      (product) => product.price < price
    );
  }

  return (
    <div>
      {displayedProducts.map((product, index) => (
        <div
          className={`contents ${index === selectedProductIndex ? 'selected' : ''}`}
          key={product.id}
          onClick={()=>setSelectedProductIndex(index)}
        >
          <img src={product.image} alt="Product" />
          <p>
            <h2>{product.title}</h2>
          </p>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Contents;
