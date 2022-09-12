import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
   const [cart, setCart] = useState([])

   useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys =Object.keys(saveCart);
    const cartProduct = productKeys.map(key => {
        const product = fakeData.find(pd => pd.key ===key)
        product.quantity = saveCart[key]
        return product;
    });

    setCart(cartProduct)

   }, []);
   const removeProduct = (productKey) => {
    const newCart = cart.filter(pd => pd.key !==productKey)
    setCart(newCart)
    removeFromDatabaseCart(productKey)
   }
    return (
        <div className='twin-container'>
            <div className='shop-container'>
            {
                cart.map(pd => <ReviewItem removeProduct={removeProduct} product={pd}></ReviewItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;