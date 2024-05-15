import React from 'react';

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul className="divide-y divide-gray-300">
        {products.map(product => (
          <li key={product.id} className="py-2 flex justify-between items-center">
            <span>{product.name}</span>
            <button onClick={() => onDelete(product.id)} className="px-4 py-1 bg-red-500 text-white rounded-md">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
