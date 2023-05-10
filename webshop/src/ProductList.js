import React from 'react';
import Product from './Product';

function ProductList({ products, onAddToCart }) {
    return (
        <div className="products-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {products.map(product => (
                <div className="product-container col mb-4" key={product.id}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;
