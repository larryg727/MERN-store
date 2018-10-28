import React from 'react';
import { priceFormatter } from '../utils';

const Product = props => {
    const { name, price } = props.product;
    return (
        <div className="productContainer">
            <img src="https://via.placeholder.com/350x400" alt="product" />
            <h2>{name}</h2>
            <h5>{priceFormatter(price)}</h5>
        </div>
    );
};

export default Product;
