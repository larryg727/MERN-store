import React from 'react';

const RegisterForm = props => {
    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const confirmPassRef = React.createRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPass: confirmPassRef.current.value
        };
        props.submitRegisterForm(user);
        passwordRef.current.value = '';
        confirmPassRef.current.value = '';
        passwordRef.current.focus();
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
