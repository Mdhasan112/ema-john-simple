import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const {name, quantity, key, price} = props.product;
    const reviewItem = {
        borderBottom: "1px solid lightgray",
        marginBottom: "5px",
        paddingBottom: "10px",
        marginLeft: "200px"

    }
    return (
        <div style={reviewItem} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <br />
            <p>Quantity: {quantity}</p>
            <p><small>{price}</small></p>
            <button 
            className='main-button'
            onClick={()=> props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;