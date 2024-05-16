import React, { useState, useEffect } from 'react';

const EditProductForm = ({ product, editProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    setName(product.name);
    setPrice(product.price.toString());
  }, [product]);

  const handleSubmit = e => {
    e.preventDefault();
    editProduct(product.id, { name, price: parseFloat(price) });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProductForm;
