import React, { useState } from 'react';

const ProductManagementWebsite = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = () => {
    if (name && price) {
      const newProduct = { id: Date.now(), name, price: parseFloat(price) };
      setProducts([...products, newProduct]);
      setName('');
      setPrice('');
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const editProduct = () => {
    if (name && price && editingProduct) {
      const updatedProducts = products.map(product =>
        product.id === editingProduct.id ? { ...product, name, price: parseFloat(price) } : product
      );
      setProducts(updatedProducts);
      setName('');
      setPrice('');
      setEditingProduct(null);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price.toString());
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="text-xl md:text-2xl font-bold leading-tight">Product Management</h1>
        <form onSubmit={editingProduct ? editProduct : addProduct} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autoFocus
              autoComplete
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full block bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-400 font-semibold rounded-lg px-4 py-3"
          >
            {editingProduct ? 'Save Product' : 'Add Product'}
          </button>
        </form>
      </div>
      <div className="bg-white ml-4 rounded-lg shadow-md p-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl mt-0 font-bold mb-8">Product List</h2>
        <ul className="space-y-4">
          {products.map(product => (
            <li key={product.id} className="flex justify-between items-center border p-4 rounded-md">
              <div>
                <span className="font-bold">{product.name}</span> - <span>${product.price}</span>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(product)}
                  className="text-blue-500 px-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="text-red-500 px-1"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagementWebsite;
