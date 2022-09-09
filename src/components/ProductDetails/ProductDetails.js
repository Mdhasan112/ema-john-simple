import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productkey} = useParams()
    const product =fakeData.find(pk => pk.key === productkey)
    return (
        <div>
            <h1>Your product details.</h1>
            <Product showAddToCard ={false} product ={product}></Product>
        </div>
    );
};

export default ProductDetails;