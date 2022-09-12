import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDatabaseCart(product.key, 1)
    }

    return (
        <div className='product-container'>
            <div className="shop-container">
                {
                    products.map(pk => <Product showAddToCard = {true} handleAddProduct = {handleAddProduct} product ={pk}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;