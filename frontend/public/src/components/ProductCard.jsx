import React from 'react';
import config from '../config';

export default function ProductCard({ product }) {
    return (
        <div className="border p-2">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover"/>
            <h2>{product.name}</h2>
            <p>{product.price} {config.currency}</p>
        </div>
    );
}
