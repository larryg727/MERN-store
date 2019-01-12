import React from 'react';

const AddCategoryForm = props => {
    const nameRef = React.createRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        e.target.reset();
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
