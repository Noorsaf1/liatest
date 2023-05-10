import React from 'react';

function Product({ product, onAddToCart }) {
    return (
        <div className="card shadow-sm h-100">
            <img src={product.image_link} className="mx-5 mx-sm-3 px-5 px-sm-0 img-fluid" alt={product.name} />
            <div className="card-body d-flex flex-column">
                <h6 className="card-text mb-3">{product.name}</h6>
                <div className="d-flex mt-auto justify-content-between align-items-center">
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => onAddToCart(product)}>Buy</button>
                    <p className="m-0">$ {product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
