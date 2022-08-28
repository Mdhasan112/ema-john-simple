import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)

    return (
        <div className='product-container'>
            <div className="shop-container">
                {
                    products.map(pk => <Product product ={pk}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>this is cart</h2>
            </div>
            
        </div>
    );
};

export default Shop;