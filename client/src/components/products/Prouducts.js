import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        fetch('/api/products')
            .then(results => results.json())
            .then(products => {
                console.log(products);
                this.setState({
                    products: products
                });
            });
    }

    render() {
        return (
            <div className="productCardsContainer">
                {this.state.products.map(product => (
                    <Product product={product} key={product._id} />
                ))}
            </div>
        );
    }
}

export default Products;
