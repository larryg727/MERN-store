import React from 'react';

const AddSubcategoryForm = props => {
    const nameRef = React.createRef();
    const categoryRef = React.createRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        const subcategory = {
            name: nameRef.current.value,
            catId: categoryRef.current.value
        };
        e.target.reset()
        props.handleNewSubcategory(subcategory);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="category">Category:</label>
            <select name="category" id="category" ref={categoryRef}>
                {props.categories.map(cat => (
                    <option key={cat._id} value={cat._id}>
                        {cat.name}
                    </option>
                ))}
            </select>

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="formInput" ref={nameRef} />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddSubcategoryForm;
