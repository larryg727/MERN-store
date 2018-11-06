import React, { Component } from 'react';
import AddProductForm from './addProductForm';
import AddCategoryForm from './addCategoryForm';
import AddSubCategoryForm from './addSubcategoryForm';

class Admin extends Component {
    state = {
        categories: []
    };

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
            .then(result => {
                let categories = this.state.categories;
                categories.push(result);
                this.setState({
                    categories: categories
                });
            })
            .catch(err => console.log(err));
    };

    handleAddNewSubCategorySubmit = subcategory => {
        fetch('/api/categories/add/sub', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subName: subcategory.name,
                id: subcategory.catId
            })
        });
    };

    componentDidMount() {
        fetch('/api/categories')
            .then(response => response.json())
            .then(results => {
                console.log(results);
                this.setState({
                    categories: results
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Ur tha bowwwsss...</h1>
                <h3>Add Product</h3>
                <AddProductForm handleNewProduct={this.handleAddProductSubmit} />
                <h3>Add Category</h3>
                <AddCategoryForm handleNewCategory={this.handleAddNewCategorySubmit} />
                <h3>Add Subcategory</h3>
                <AddSubCategoryForm
                    handleNewSubcategory={this.handleAddNewSubCategorySubmit}
                    categories={this.state.categories}
                />
            </div>
        );
    }
}

export default Admin;
