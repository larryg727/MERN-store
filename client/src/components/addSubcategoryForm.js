import React from 'react';

const AddSubcategoryForm = props => {
    const nameRef = React.createRef();
    const categoryRef

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        props.handleNewCategory(name);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="formInput" ref={nameRef} />

            <button type="submit">Add</button>
        </form>
    );
};

export default AddCategoryForm;
