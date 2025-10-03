import React from 'react';
import config from '../config';

export default function Navbar() {
    return (
        <nav className="bg-orange-500 p-4 text-white flex justify-between">
            <div className="font-bold">{config.siteName}</div>
            <div>
                <a href="/">Home</a> | <a href="/products">Products</a> | <a href="/cart">Cart</a>
            </div>
        </nav>
    );
}
