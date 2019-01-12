import React from 'react';

const RegisterForm = props => {
    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const confirmPassRef = React.createRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPass = confirmPassRef.current.value;
        console.log('email', email);
        console.log('pass', password);
        console.log('confirm', confirmPass);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="formInput" ref={emailRef} required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="formInput" ref={passwordRef} required />

            <label htmlFor="confirmPass">Confirm Password</label>
            <input type="password" name="confirmPass" className="formInput" ref={confirmPassRef} required />

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
