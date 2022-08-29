import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = product.price
        
    }
    return (
        <div>
            <h2>Order Samary</h2>
            <p>Iteam Ordered: {cart.length}</p>
            <p>total price: {total}</p>
        </div>
    );
};

export default Cart;