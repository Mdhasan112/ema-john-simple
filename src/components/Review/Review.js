import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyimg from '../../images/giphy.gif'

const Review = () => {
   const [cart, setCart] = useState([]);
   const [orderPlaced, setOrderPlaced] = useState(false)
   const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
   }

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

   let thanyou;
   if(orderPlaced) {
    thanyou = <img src={happyimg} alt="" />
   } 
    return (
        <div className='twin-container'>
            <div className='shop-container'>
            {
                cart.map(pd => <ReviewItem removeProduct={removeProduct} product={pd}></ReviewItem>)
            }
            {
                thanyou
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;