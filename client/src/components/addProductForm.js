import React from 'react';

const AddProductForm = props => {
    const nameRef = React.createRef();
    const priceRef = React.createRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const product = {
            name: name,
            price: price * 100
        };
        e.target.reset();
        props.handleNewProduct(product);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="formInput" ref={nameRef} />

            <label htmlFor="price">Price:</label>
            <input type="number" name="price" className="formInput" step=".01" min=".01" ref={priceRef} />

            <button type="submit">Add</button>
        </form>
    );
};

export default AddProductForm;
