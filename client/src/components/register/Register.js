import React, { Component } from 'react';
import RegisterForm from './registerForm';

class Register extends Component {
    state = {
        error: 'test error'
    };
    render() {
        return (
            <div>
                <h2>Create your account</h2>
                <RegisterForm error={this.state.error} />
            </div>
        );
    }
}

export default Register;
