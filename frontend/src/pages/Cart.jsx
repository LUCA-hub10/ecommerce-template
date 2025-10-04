import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Votre Panier</h1>
      {cart.length === 0 ? <p>Panier vide</p> :
        cart.map(p => (
          <div key={p._id} className="border p-2 mb-2 flex justify-between">
            <span>{p.name} - {p.price} DT</span>
            <button onClick={() => removeFromCart(p._id)} className="bg-red-500 text-white px-2">Supprimer</button>
          </div>
        ))
      }
    </div>
  );
}
