import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <nav className="bg-orange-500 p-4 text-white flex justify-between">
      <div className="font-bold text-lg">Mon E-commerce</div>
      <div>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}
