import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css'

const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key == existingKey);
            product.quantity = saveCart[existingKey];
            return product;
        })
        setCart(previousCart)
    }, []);

    const handleAddProduct = (product) => {
        const toBeaddedkey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeaddedkey);
        let count = 1;
        let newCart;
        if(sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeaddedkey)
            newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className='twin-container'>
            <div className="shop-container">
                {
                    products.map(pk => <Product showAddToCard = {true} handleAddProduct = {handleAddProduct} key ={pk.key} product ={pk}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}>
                <Link to ="/review">
                <button className='main-button'>Order Review</button>
            </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;