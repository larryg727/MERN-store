import React, { Component } from 'react';
import AddProductForm from './addProductForm';
import AddCategoryForm from './addCategoryForm';

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

    handleAddNewCategorySubmit = category => {
        fetch('/api/categories/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: category
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
                <AddCategoryForm handleNewCategory={this.handleAddNewCategorySubmit} />
            </div>
        );
    }
}

export default Admin;
