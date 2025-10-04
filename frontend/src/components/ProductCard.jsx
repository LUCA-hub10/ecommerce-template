import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="border p-2">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
      <h2>{product.name}</h2>
      <p>{product.price} DT</p>
      <button onClick={() => addToCart(product)} className="bg-green-500 text-white px-2 mt-2">Add to Cart</button>
    </div>
  );
}
