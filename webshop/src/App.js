import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import Cart from './Cart';
import './styles.css';


function App() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('data.json');
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const onAddToCart = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (
      <div className="App">
          <ProductList products={products} onAddToCart={onAddToCart} />
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
  );
}

export default App;
