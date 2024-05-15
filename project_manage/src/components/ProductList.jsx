import React from 'react';

function ProductList({ products, deleteProduct }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
