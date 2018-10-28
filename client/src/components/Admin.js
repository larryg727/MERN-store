import React, { Component } from 'react';
import AddProductForm from './addProductForm';

class Admin extends Component {
    handleAddProductSubmit = product => {
        fetch('/api/products', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: product.name,
                price: product.price
            })
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Ur tha bowwwsss...</h1>
                <AddProductForm handleNewProduct={this.handleAddProductSubmit} />
            </div>
        );
    }
}

export default Admin;
