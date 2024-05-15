import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="border border-gray-300 rounded-md px-4 py-2 mb-2"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
