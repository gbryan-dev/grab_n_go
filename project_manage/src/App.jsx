import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = product => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  const deleteProduct = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  const editProduct = (id, updatedProduct) => {
    setProducts(
      products.map(product => (product.id === id ? { ...product, ...updatedProduct } : product))
    );
    setEditingProduct(null);
  };

  const startEditing = product => {
    setEditingProduct(product);
  };

  return (
    <div className="container mx-auto p-4">
      <h1>Product Management</h1>
      <hr />
      <ProductList products={products} deleteProduct={deleteProduct} startEditing={startEditing} />
      {editingProduct ? (
        <EditProductForm product={editingProduct} editProduct={editProduct} />
      ) : (
        <AddProductForm addProduct={addProduct} />
      )}
    </div>
  );
}

export default App;
