import React, { Component } from 'react';
import RegisterForm from './registerForm';
import { Redirect } from 'react-router-dom';

class Register extends Component {
    state = {
        error: '',
        success: false
    };

    submitRegisterForm = user => {
        if (user.password === user.confirmPass) {
            fetch('/api/user/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user.email,
                    password: user.password
                })
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    this.setState({ success: true });
                })
                .catch(err => {
                    console.log(err);
                    this.setState({ error: err });
                });
        } else {
            this.setState({ error: 'Passwords must match' });
        }
    };

    render() {
        if (this.state.success) {
            return <Redirect to="/login" />;
        }
        return (
            <div>
                <h2>Create your account</h2>
                <span className="error">{this.state.error}</span>
                <RegisterForm submitRegisterForm={this.submitRegisterForm} />
            </div>
        );
    }
}

export default Register;
