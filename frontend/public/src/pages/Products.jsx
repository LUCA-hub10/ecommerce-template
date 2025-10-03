import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {products.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
    );
}

